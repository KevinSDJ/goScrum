import { Box, VStack, Divider, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import {TasksDisplay} from '../../groups'
import { Filter } from '../filter/filter'


export default function TasksSection() {
    let { data } = useSelector(state => state.tasks)
    let [listdisplay,setList]= useState(data)
    useEffect(()=>{
        if(data){
            setList(data)
        }
    },[data])

    return (<VStack w={'65%'} align={'stretch'}>
        <Heading size={'sm'}>Mis Tareas</Heading>
        <Box  height={'40px'}>
            <Filter {...{data,setList,spacing:30,listdisplay,direction:'row'}}/>
        </Box>
        <Divider />
        {listdisplay&& <TasksDisplay list={listdisplay}/>}
        
    </VStack>)
}