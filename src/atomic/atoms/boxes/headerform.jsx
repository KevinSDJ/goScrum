import {Stack,HStack,Text} from '@chakra-ui/react'


export const Headerform=({LogoPrimary,text,Linkbtn})=>{
    return (
        <Stack spacing="6">
            <LogoPrimary />
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <HStack spacing="1" justify="center">
                <Text color="muted">{text}</Text>
                <Linkbtn label={'Sign up'} color={'blue'}/>
                </HStack>
            </Stack>
        </Stack>
    )
}