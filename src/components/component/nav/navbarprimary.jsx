import {Box,Stack,Spacer,IconButton} from '@chakra-ui/react'
import { Primarybtn } from '../../atoms/buttons'
import LogoPrimary from '../../atoms/Logo'
import { MenuDesktop } from '../../molecules'
import {useResize} from './../../../hooks' 
import {MdOutlineAddCircle} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const {screen} = useResize()
    let navigate= useNavigate()
    return (
    <Box as={'section'} pb={2} maxW={'full'} padding={(screen<600&&'0') ||'0 10px'} borderBottom={'1px solid white'}>
        <Stack direction={'row'} alignItems={'center'} padding='4' justifyContent={'space-around'}>
            <LogoPrimary />
            <Spacer />
            {screen<=1100&& <IconButton icon={<MdOutlineAddCircle/>}  variant={'link'} padding={'0'} fontSize={'4xl'} size={'lg'} colorScheme={'orange'}/>}
            <Box>
                <Primarybtn size={(screen<=900 && 'xs')|| 'sm'} onClick={(e)=>navigate('/donation')} colorScheme={'red'} _focus={{ boxShadow: 'none' }} label={'DONAR'}/>
            </Box>
            <MenuDesktop />
        </Stack>
    </Box>)
}