import {Box,Stack,useBreakpointValue,useColorModeValue} from '@chakra-ui/react'



export const Formbody=({children})=>{
    return (<Box
        py={{ base: '0', sm: '8' ,lg:'5'}}
        px={{ base: '4', sm: '10',lg:'10' }}
        bg={useBreakpointValue({ base: 'transparent', sm: '#ffffffc8' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('lg', 'dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
    >
        <Stack spacing="6">
            {children}
        </Stack>
    </Box>)
}