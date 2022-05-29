import {Box,Stack,Spacer} from '@chakra-ui/react'
import { Primarybtn } from '../../elements/buttons'
import LogoPrimary from '../../elements/Logo'
import { MenuDesktop } from '../../groups'
import {useResize,useScreentype} from '../../../hooks' 
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const {screen} = useResize()
    const isMobile=useScreentype()
    let navigate= useNavigate()
    return (
    <Box as={'section'} pb={2} maxW={'full'} h={(isMobile&&'calc(4rem)')||'auto'} padding={(screen<600&&'0') ||'0 10px'} borderBottom={'1px solid white'}>
        <Stack direction={'row'} alignItems={'center'} padding={isMobile&&'10px 5px 0 10px'||'4'} justifyContent={'space-around'}>
            <LogoPrimary />
            <Spacer />
            {!isMobile&&<Box>
                <Primarybtn size={(screen<=900 && 'xs')|| 'sm'} onClick={(e)=>navigate('/donation')} colorScheme={'red'} _focus={{ boxShadow: 'none' }} label={'DONAR'}/>
            </Box>}
            <MenuDesktop />
        </Stack>
    </Box>)
}