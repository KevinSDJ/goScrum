import {HStack,Box,StackDivider} from '@chakra-ui/react'

export const DesktopLayout =()=>{
    return (
        <HStack divider={<StackDivider/>} h={'full'} align={'flex-start'} paddingBlockStart={'10'}>
            <Box h={'200px'} bgColor={'blue.200'} w='40%'>create task</Box>
            <Box h={'100px'} bgColor={'blue.200'} w='60%'>cards</Box>
        </HStack>
    )
}