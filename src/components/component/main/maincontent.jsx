
import {Container} from '@chakra-ui/react'
import { MobileLayout ,DesktopLayout} from '../../groups'
import {useScreentype} from '../../../hooks'
export default function Main(){
    const isMobile= useScreentype()
    return (
    <Container maxW={'100%'} height={'calc(100vh - 8rem)'}  >
        {isMobile&&<MobileLayout/>}
        {!isMobile&&<DesktopLayout/> }
    </Container>
    )
}