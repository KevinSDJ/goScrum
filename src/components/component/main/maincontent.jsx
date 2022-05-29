
import {Container} from '@chakra-ui/react'
import { MobileLayout ,DesktopLayout} from '../../groups'
import {useResize} from '../../../hooks'
export default function Main(){
    const {screen} = useResize()
    return (
    <Container maxW={'100%'} height={'calc(100vh - 8rem)'}  >
        {screen<=1000&&<MobileLayout/>}
        {screen>1000 &&<DesktopLayout/> }
    </Container>
    )
}