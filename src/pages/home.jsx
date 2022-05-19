import {Container} from '@chakra-ui/react'
import Main from '../atomic/organisms/main'
import { Navbar } from '../atomic/organisms/nav'



const Home= ()=>{
    return (
    <Container maxW={'100%'} minH={'100vh'} bgColor={'#E5E5E5'} padding={'0'}>
        <Navbar/>
        <Main/>
    </Container>
    )
}

export default Home