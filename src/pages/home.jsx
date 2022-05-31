import {Container,Box} from '@chakra-ui/react';
import  {getTasks} from '../redux/tasks.slice.js'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { useScreentype } from '../hooks';




export const Home= ()=>{
    const isMobile= useScreentype()
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    },[dispatch])
    return (
    <Container maxW='100%' minH={'calc(100vh)'} bgColor={'#E5E5E5'} padding={'0'}>
       
    </Container>
    )
}

