
import {Container} from '@chakra-ui/react'
import { MobileLayout ,DesktopLayout} from '../../molecules'
import {useResize} from './../../../hooks'
export default function Main(){
    const {screen} = useResize()
    return (
    <Container maxW={'full'} h={'70vh'} bgColor={'yellow'}>
        {screen<=900&&<MobileLayout/>}
        {screen>900 &&<DesktopLayout/> }
    </Container>
    )
}