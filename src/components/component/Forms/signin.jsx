import { FormErrorMessage ,FormControl ,FormLabel,Stack,HStack,Checkbox} from '@chakra-ui/react'
import { useFormik} from 'formik'
import { Formbox ,Headerform,Formbody,FormFooter} from '../../atoms/boxes'
import { Linkbtn ,Primarybtn} from '../../atoms/buttons'
import LogoPrimary from '../../atoms/Logo/logonormal'
import {InputFrm} from './../../atoms/inputs'
import { SignInSchema } from '../../../utilities/validateauthschemas'
import {fetchSignIn} from './../../../redux/user.slice'
import {useDispatch} from 'react-redux'


export const Signin = ({changeform}) => {
    let dispatch=useDispatch()
    const initialValues={
        username:'',
        password:'',
        guard:true
    }
    const onSubmit=(e)=>{
        dispatch(fetchSignIn({userName:values.username,password:values.password}))
        handleReset()
    }
    const Formik = useFormik({initialValues,validationSchema:SignInSchema,onSubmit})
    const {values,handleChange,errors,handleSubmit,handleReset} = Formik

    return (<Formbox>
        <Stack spacing="8">
            <Headerform  LogoPrimary={LogoPrimary} text={'Don\'t have an account?'}>
                <Linkbtn   label={'Sign up'} color={'blue'} onclick={changeform}/>
            </Headerform>
            <Formbody onsubmit={handleSubmit} autoComplete='off'>
                <Stack spacing="5">
                    <FormControl isInvalid={errors.username}>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <InputFrm   type={'text'} onChange={handleChange} value={values.username}  name='username' id='username'  />
                        {errors?.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
                    </FormControl>
                    <FormControl isInvalid={errors.password}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputFrm type='password' onChange={handleChange} value={values.password}   name='password' id='password'  />
                        {errors?.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                    </FormControl>
                </Stack>
                <HStack justify="space-between">
                    <Checkbox defaultChecked onChange={handleChange} name='guard' pointerEvents={'all'}>Remember me</Checkbox>
                    <Linkbtn label={'Forgot password?'} color={'blue'} size={'sm'} />
                </HStack>
                <FormFooter label={'Sign in'} signinbtn={Primarybtn} type='submit' otherauthmethod={null}/>
            </Formbody>
        </Stack>
    </Formbox>)
}