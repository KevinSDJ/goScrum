import {Container,Box} from '@chakra-ui/react';
import Main from '../components/component/main';
import  {getTasks} from '../redux/tasks.slice.js'
import { Navbar } from '../components/component/nav-desktop'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { useScreentype } from '../hooks';
import { NavMobile } from '../components/component/navbottom-mobile';



export const Home= ()=>{
    const isMobile= useScreentype()
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    },[dispatch])
    return (
    <Container maxW='100%' minH={'calc(100vh)'} bgColor={'#E5E5E5'} padding={'0'}>
        <Navbar/>
        <Main/>
        {isMobile && <NavMobile/>}
    </Container>
    )
}

