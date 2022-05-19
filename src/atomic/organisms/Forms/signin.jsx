import { FormControl ,FormLabel,Stack,HStack,Checkbox} from '@chakra-ui/react'
import { Formbox ,Headerform,Formbody,FormFooter} from '../../atoms/boxes'
import { Linkbtn ,Primarybtn} from '../../atoms/buttons'
import LogoPrimary from '../../atoms/Logo/logonormal'
import {InputFrm} from './../../atoms/inputs'

export const Signin = () => {
    return (<Formbox>
        <Stack spacing="8">
            <Headerform Linkbtn={Linkbtn} LogoPrimary={LogoPrimary} text={'Don\'t have an account?'} />
            <Formbody>
                <Stack spacing="5">
                    <FormControl >
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <InputFrm type={'text'} name='username' id='username' required />
                    </FormControl>
                    <FormControl >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputFrm type='password' name='password' id='password' required />
                    </FormControl>
                </Stack>
                <HStack justify="space-between">
                    <Checkbox defaultChecked pointerEvents={'all'}>Remember me</Checkbox>
                    <Linkbtn label={'Forgot password?'} color={'blue'} size={'sm'} />
                </HStack>
                <FormFooter signinbtn={Primarybtn} />
            </Formbody>
        </Stack>
    </Formbox>)
}