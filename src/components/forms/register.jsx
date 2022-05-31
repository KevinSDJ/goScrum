import { useState, useEffect } from 'react'
import { Stack, FormControl, FormLabel, FormErrorMessage, Select, Container, HStack,Input } from '@chakra-ui/react'
import LogoPrimary from '../logo'
import { Linkbtn, Primarybtn } from '../buttons'
import { useFormik } from 'formik'
import { SignUpSchema } from '../../utilities/validateauthschemas'
import { ENDPOINT } from '../../utilities/settings'
export const Register = () => {
    const [registerdata, setRegData] = useState(null)
    useEffect(() => {
        fetch(`${ENDPOINT}/auth/data`)
            .then(res => res.json())
            .then(res => {
                setRegData(res.result)
            })
    }, [])
    const onSubmit = (e) => {
        console.log(values)
        handleReset()
    }
    const Formik = useFormik({
        initialValues:
            { username: '', password: '' }, validationSchema: SignUpSchema, onSubmit
    })
    const { values, handleChange, handleSubmit, errors, handleReset } = Formik
    return (
        <Container
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
                            <Text color="muted">{'Do you already have an account?'}</Text>
                            <Linkbtn label={'Sign in'} color={'blue'} />
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
                    <Stack spacing={5}>
                        <FormControl isInvalid={errors.username}>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input
                                pointerEvents='all'
                                id='username-r'
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
                                id='password-r'
                                type='password'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                bg={useBreakpointValue({ base: '#fff', sm: 'transparent' })}
                                required />
                            {errors?.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                        </FormControl>
                        <FormControl >
                            <FormLabel htmlFor="Rol">Rol</FormLabel>
                            <Select name={'Rol'} placeholder='Select option' onChange={handleChange}>
                                {registerdata?.Rol?.map(e => <option key={e} value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <FormControl >
                            <FormLabel htmlFor="continent">Continent</FormLabel>
                            <Select name={'continente'} placeholder='Select option' onChange={handleChange}>
                                {registerdata?.continente?.map(e => <option key={e} value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        {values.continente && values.continente === 'America' && <FormControl >
                            <FormLabel htmlFor="Region">Region</FormLabel>
                            <Select name={'region'} placeholder='Select option' onChange={handleChange}>
                                {registerdata?.region?.map(e => <option key={e} value={e}>{e}</option>)}
                            </Select>
                        </FormControl>}
                    </Stack>
                    <Primarybtn colorScheme={'red'} label='Sign Up' variant="solid" />
                </Box>
            </Stack>
        </Container>)
}