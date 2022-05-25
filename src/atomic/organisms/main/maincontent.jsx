
import {Container} from '@chakra-ui/react'
import { MobileLayout ,DesktopLayout} from '../../molecules'
import {useResize} from './../../../hooks'
export default function Main(){
    const {screen} = useResize()
    return (
    <Container maxW={'full'} h={'90vh'} >
        {screen<=1000&&<MobileLayout/>}
        {screen>1000 &&<DesktopLayout/> }
    </Container>
    )
}