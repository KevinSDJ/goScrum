import {HStack,Box,StackDivider,Heading} from '@chakra-ui/react'
import { useState } from 'react'
import { TaskForm } from '../component/Forms/crateTask'
import TasksSection from '../component/tasks_section'

export const DesktopLayout =()=>{
    const [formselect,setFormselect] = useState('create')
    return (
        <HStack divider={<StackDivider/>} justify='space-between' h={'auto'} align={'flex-start'} paddingBlockStart={'10'}>
            <Box w='auto'>
               <TaskForm/>
            </Box>
            <TasksSection/>
        </HStack>
    )
}