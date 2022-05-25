import {Container} from '@chakra-ui/react';
import Main from '../atomic/organisms/main';
import  {getTasks} from '../redux/tasks.slice.js'
import { Navbar } from '../atomic/organisms/nav'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'



const Home= ()=>{
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    },[dispatch])
    return (
    <Container maxW={'100%'} minH={'100vh'} bgColor={'#E5E5E5'} padding={'0'}>
        <Navbar/>
        <Main/>
    </Container>
    )
}

export default Home