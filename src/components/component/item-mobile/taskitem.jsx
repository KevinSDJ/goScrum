import {HStack,Text,Button,Stack,Box,VStack,Spacer} from '@chakra-ui/react'


export const TasksMobile=()=>{
    return <HStack bgColor={'blackAlpha.200'} w='full'>
        <Stack direction='column' w='calc(8rem)'>
            <Button size={'xs'}>check</Button>   
            <Button size={'xs'}>check</Button>
        </Stack>
        <VStack align='stretch' w={'100%'} >
            <Text fontSize='md'>title</Text>
            <Box display='flex' justifyContent='space-between'>
                <Text>date</Text>
                <Stack direction='row'>
                    <Button size={'xs'}>status1</Button>
                    <Button size={'xs'}>status2</Button>
                </Stack>
            </Box>
        </VStack>
    </HStack>
}
