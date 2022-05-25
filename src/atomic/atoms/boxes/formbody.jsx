import {Box,Stack,useBreakpointValue,useColorModeValue} from '@chakra-ui/react'



export const Formbody=({children,onsubmit,color,shadowcolor,...args})=>{
    return (<Box as='form'
        {...args}
        onSubmit={onsubmit}
        py={{ base: '0', sm: '8' ,lg:'5'}}
        px={{ base: '4', sm: '10',lg:'10' }}
        bg={useBreakpointValue({ base: 'transparent', sm:color || '#ffffffc8' })}
        boxShadow={{ base: 'none', sm:shadowcolor|| useColorModeValue('lg', 'dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
    >
        <Stack spacing="6">
            {children}
        </Stack>
    </Box>)
}