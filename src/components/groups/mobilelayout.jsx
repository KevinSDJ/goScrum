import {VStack,Box} from '@chakra-ui/react'


export const MobileLayout=()=>{
    return (<VStack
        spacing={4}
        align='stretch'
        >
            <Box h={'50px'} bgColor='blue'>box1</Box>
            <Box h={'200px'} bgColor='blue'>box2</Box>
        </VStack>)
}