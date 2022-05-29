import { VStack, Heading, HStack, Input, Select, Textarea, Box } from '@chakra-ui/react'
import { useId } from 'react'
import { Formbody } from '../../atoms/boxes/formbody'
import { Primarybtn } from '../../atoms/buttons'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { postTask ,getTasks,cleanReqMsg} from '../../../redux/tasks.slice'

let status = ["NEW", "IN PROGRESS", "FINISHED"]
let priority = ["LOW", "MEDIUM", "HIGH"]
export const TaskForm = () => {
    let dispatch = useDispatch()
    let validate = Yup.object().shape({
        title: Yup.string()
            .min(4, 'min 4 character')
            .max(15, 'max 15 character')
            .required('*required'),
        description: Yup.string()
            .min(20, 'min 20 character')
            .max(450, 'max 450 character')
            .required('*required'),
        status: Yup.string().required('*required'),
        importance: Yup.string().required('*required')
    })
    const onSubmit = () => {
        dispatch(postTask(values))
            .unwrap()
            .then((success) => {
                dispatch(getTasks())
                dispatch(cleanReqMsg())
            })
        handleReset()
    }
    let Formik = useFormik({
        initialValues: { title: '', status: '', importance: '', description: '' },
        validationSchema: validate,
        onSubmit: onSubmit
    })
    let { values, errors, handleChange, handleSubmit, handleReset } = Formik

    return (
        <>
            <VStack w={'auto'} align='flex-start' padding={'0'} margin='0'>
                <Formbody onsubmit={handleSubmit} padding={'0'}  margin='0' width='100%' color={'none'} shadowcolor={'none'}>
                    <Heading size={'md'}> Create Task</Heading>
                    <Box display={'flex'} flexDirection='column' gap='20px 0'>
                        <HStack>
                            <Input value={values.title} isInvalid={errors?.title} borderColor={'gray'} onChange={handleChange} type="text" name="title" placeholder='title' />
                            <Select value={values.status} isInvalid={errors?.status} borderColor={'gray'} onChange={handleChange} name={'status'} placeholder='select status'>
                                {status.map(e => <option key={useId()} value={e} >{e}</option>)}
                            </Select>
                            <Select value={values.importance} isInvalid={errors?.importance} borderColor={'gray'} onChange={handleChange} name={'importance'} placeholder='select priority'>
                                {priority.map(e => <option key={useId()} value={e} >{e}</option>)}
                            </Select>
                        </HStack>
                        <Textarea value={values.description} isInvalid={errors?.description} borderColor={'gray'} name={'description'} onChange={handleChange} placeholder='description....' />
                    </Box>
                    <Primarybtn w={'max-content'} type='submit' colorScheme={'red'} variant="solid" label={'Create'} />
                </Formbody>
            </VStack>
        </>
    )
}