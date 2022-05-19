import {Box,Stack,Spacer} from '@chakra-ui/react'
import { Primarybtn } from '../../atoms/buttons'
import LogoPrimary from '../../atoms/Logo'
import { MenuDesktop } from '../../molecules'
import {useResize} from './../../../hooks' 


export const Navbar = () => {
    const {screen} = useResize()
    return (
    <Box as={'section'} pb={2} maxW={'full'} padding={(screen<600&&'0') ||'0 10px'} borderBottom={'1px solid white'}>
        <Stack direction={'row'} alignItems={'center'} padding='4' justifyContent={'space-around'}>
            <LogoPrimary />
            <Spacer />
            <Box>
                <Primarybtn size={(screen<=900 && 'xs')|| 'sm'} colorScheme={'red'} _focus={{ boxShadow: 'none' }} label={'DONAR'}/>
            </Box>
            <MenuDesktop />
        </Stack>
    </Box>)
}