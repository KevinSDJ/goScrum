import { Box,HStack,IconButton ,Text ,Stack,Badge,useBreakpointValue} from '@chakra-ui/react'
import {FiDelete} from 'react-icons/fi'



const CardTask = ({ title, status, importance, createdAt, description }) => {
    let datetime= new Date(createdAt).toLocaleString()+'hs.'
    
    return (
        <Box display={'flex'} padding={'5% 2% 5% 5%'} pos={'relative'} border={'2px solid gray'} borderRadius={'1rem'} flexDirection={'column'}  w={'full'}   >
                <IconButton icon={<FiDelete/>} pos={'absolute'} top={'calc(1rem)'} right={'0'} variant='link'colorScheme={'red'} size={'lg'} _focus={{border:'none'}}/>
                <HStack justify={'space-between'}>
                   <Text fontWeight={600} fontSize={{base:'x-large',sm:'3x1',md:'3x1',lg:'4x1'}} >{title}</Text>
                </HStack>
                <Text fontSize={useBreakpointValue({base:'xs',sm:'medium',md:'4x1',lg:'5x1'})} >{datetime}</Text>
                <Stack direction='row' paddingTop={'1'}>
                    <Badge fontSize={useBreakpointValue({base:'xs',sm:'xs',md:'xs',lg:'sm'})} colorScheme={(status=='NEW'&& 'blue')||(status=='IN PROGRESS'&& 'yellow')||'violet'}>{status}</Badge>
                    <Badge fontSize={useBreakpointValue({base:'xs',sm:'xs',md:'xs',lg:'sm'})} colorScheme={(importance=='LOW'&& 'green')||(status=='MEDIUM'&& 'yellow')||'red'}>{importance}</Badge>
                </Stack>   
                <Text>{description}</Text> 
        </Box>
    )
}


export default CardTask