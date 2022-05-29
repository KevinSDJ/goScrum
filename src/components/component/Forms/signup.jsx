import { useState ,useEffect} from 'react'
import { Formbox, Formbody, Headerform, FormFooter } from '../../elements/boxes'
import { Stack, FormControl, FormLabel, FormErrorMessage, Select } from '@chakra-ui/react'
import LogoPrimary from '../../elements/Logo/logonormal'
import { Linkbtn, Primarybtn } from '../../elements/buttons'
import { useFormik } from 'formik'
import { SignUpSchema } from '../../../utilities/validateauthschemas'
import { InputFrm } from '../../elements/inputs'
import { ENDPOINT } from '../../../utilities/settings'
export const SignUp = ({ changeform }) => {
    const [registerdata,setRegData]= useState(null)
    useEffect(()=>{
        fetch(`${ENDPOINT}/auth/data`)
        .then(res=>res.json())
        .then(res=>{
            setRegData(res.result)
        })
    },[])
    const onSubmit = (e) => {
        console.log(values)
        handleReset()
    }
    const Formik = useFormik({
        initialValues:
            { username: '', password: '' }, validationSchema: SignUpSchema, onSubmit
    })
    const { values, handleChange, handleSubmit, errors,handleReset } = Formik
    return (
        <Formbox>
            <Stack spacing="8">
                <Headerform LogoPrimary={LogoPrimary} text={'Do you already have an account?'}>
                    <Linkbtn label={'Sign in'} color={'blue'} onclick={changeform} />
                </Headerform>
                <Formbody onsubmit={handleSubmit}>
                    <Stack spacing={5}>
                        <FormControl isInvalid={errors.username}>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <InputFrm type={'text'} onChange={handleChange} value={values.username} name='username' id='username' />
                            {errors?.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputFrm type='password' onChange={handleChange} value={values.password} name='password' id='password' />
                            {errors?.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                        </FormControl>
                        <FormControl >
                            <FormLabel htmlFor="Rol">Rol</FormLabel>
                            <Select name={'Rol'} placeholder='Select option' onChange={handleChange}>
                                {registerdata?.Rol?.map(e=><option key={e} value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <FormControl >
                            <FormLabel htmlFor="continent">Continent</FormLabel>
                            <Select name={'continente'} placeholder='Select option' onChange={handleChange}>
                                {registerdata?.continente?.map(e=><option key={e} value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        {values.continente && values.continente==='America'&& <FormControl >
                            <FormLabel htmlFor="Region">Region</FormLabel>
                            <Select name={'region'} placeholder='Select option' onChange={handleChange}>
                                {registerdata?.region?.map(e=><option key={e} value={e}>{e}</option>)}
                            </Select>
                        </FormControl>}
                    </Stack>
                    <FormFooter label={'Sign up'} signinbtn={Primarybtn} type='submit' otherauthmethod={null} />
                </Formbody>
            </Stack>
        </Formbox>)
}