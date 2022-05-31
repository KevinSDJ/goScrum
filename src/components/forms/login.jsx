import { useDispatch } from 'react-redux'
import {
    FormControl,
    Box,
    HStack,
    Stack,
    Container,
    Text,
    FormLabel,
    useBreakpointValue,
    useColorModeValue,
    Input,
    Checkbox,
    FormErrorMessage
} from '@chakra-ui/react'
import LogoPrimary from './../logo'
import { useFormik } from 'formik'
import { Primarybtn, Linkbtn } from '../buttons'
import { fetchSignIn } from '../../redux/user.slice'
import { SignInSchema } from './../../utilities/validateauthschemas'

export const Login = () => {
    let dispatch = useDispatch()
    const initialValues = {
        username: '',
        password: '',
        guard: true
    }
    const onSubmit = (e) => {
        dispatch(fetchSignIn({ userName: values.username, password: values.password }))
        handleReset()
    }
    const Formik = useFormik({ initialValues, validationSchema: SignInSchema, onSubmit })
    const { values, handleChange, errors, handleSubmit, handleReset } = Formik

    return (<Container
        maxW="lg"
        py={{ base: '12', md: '24' }}
        px={{ base: '0', sm: '8', lg: '2' }}>
        <Stack spacing="8">
            <Stack spacing="6">
                <LogoPrimary />
                <Stack
                    spacing={{ base: '2', md: '3' }}
                    textAlign="center">
                    <HStack spacing="1" justify="center">
                        <Text color="muted">{'Don\'t have an account?'}</Text>
                        <Linkbtn label={'Sign up'} color={'blue'} />
                    </HStack>
                </Stack>
            </Stack>
            <Box as='form'
                onSubmit={handleSubmit}
                py={{ base: '0', sm: '8', lg: '5' }}
                px={{ base: '4', sm: '10', lg: '10' }}
                bg={useBreakpointValue({ base: 'transparent', sm: '#ffffffc8' })}
                boxShadow={{ base: 'none', sm: 'dark' || useColorModeValue('lg', 'dark') }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                    {/* data and inputs section form*/}
                    <Stack spacing="5">
                        <FormControl isInvalid={errors.username}>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input
                                pointerEvents='all'
                                id='username'
                                type='text'
                                name='username'
                                value={values.username}
                                onChange={handleChange}
                                bg={useBreakpointValue({ base: '#fff', sm: 'transparent' })}
                                required />
                            {errors?.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                pointerEvents='all'
                                id='password'
                                type='password'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                bg={useBreakpointValue({ base: '#fff', sm: 'transparent' })}
                                required />
                            {errors?.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                        </FormControl>
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox
                            defaultChecked
                            onChange={handleChange}
                            name='guard'
                            pointerEvents={'all'}>Remember me</Checkbox>
                        <Linkbtn label={'Forgot password?'} color={'blue'} size={'sm'} />
                    </HStack>
                    {/* footer form , submit button and others method to login*/}
                    <Stack spacing="6">
                        <Primarybtn colorScheme={'red'} label='Sign In' variant="solid" />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>)
}