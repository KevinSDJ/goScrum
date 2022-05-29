import { Box, Stack, VStack, Divider, HStack, Heading, RadioGroup, Radio,Select,Spacer,useBreakpointValue } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useState,useEffect,useLayoutEffect } from 'react'
import {TasksDisplay} from '../../groups'
import {Searchbar} from '../../groups'


export default function TasksSection() {
    let [radiovalue,setChecked]= useState('Todos')
    let [selects,setSelects]= useState('ALL')
    let { data } = useSelector(state => state.tasks)
    let [list,setList]= useState(data)
    let {userName}= JSON.parse(localStorage.getItem('goScrumUsr'))
    const handleChangeSelect=(e)=>{
            setSelects(e.target.value)
    }
    useLayoutEffect(()=>{
        let my= Boolean(radiovalue==='Mis Tareas') || false
        if(selects==='ALL'){
            if(my){
                setList(data.filter(e=>e.user.userName===userName))
            }else{
                setList(data)
            }
        }else{
            if(my){
                setList(data.filter(e=>e.importance===selects&&e.user.userName===userName))
            }else{
                setList(data.filter(e=>e.importance===selects))
            }
        }
    },[selects,radiovalue])
    useEffect(()=>{
        if(data){
            setList(data)
        }
    },[data])
    Searchbar
    return (<VStack w={'65%'} align={'stretch'}>
        <Heading size={'sm'}>Mis Tareas</Heading>
        <Box  height={'40px'}>
            <HStack paddingX={'3'}>
                <RadioGroup onChange={setChecked} value={radiovalue}>
                    <Stack direction='row'>
                        <Radio colorScheme={'orange'} defaultChecked value='Todos'>Todos</Radio>
                        <Radio colorScheme={'orange'} value='Mis Tareas'>Mis Tareas</Radio>
                    </Stack>
                </RadioGroup>
                <Spacer/>
                <Searchbar data={data}  setList={setList}/>
                <Spacer/>
                <Select borderColor={'gray'} value={selects} onChange={handleChangeSelect}  w={useBreakpointValue({base:'200px',sm:'100px',md:'300px',lg:'400px'})} >
                    <option value='ALL'>All</option>
                    <option value='LOW'>Low</option>
                    <option value='MEDIUM'>Medium</option>
                    <option value='HIGHT'>Hight</option>
                </Select>
            </HStack>
        </Box>
        <Divider />
        {list&& <TasksDisplay list={list}/>}
        
    </VStack>)
}