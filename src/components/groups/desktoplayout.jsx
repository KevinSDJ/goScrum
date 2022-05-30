import {HStack,Box,StackDivider} from '@chakra-ui/react'
import { TaskForm } from '../component/Forms/crateTask'
import TasksSection from '../component/tasks_section'

export const DesktopLayout =()=>{
    return (
        <HStack divider={<StackDivider/>} justify='space-between' h={'auto'} align={'flex-start'} paddingBlockStart={'10'}>
            <Box w='auto'>
               <TaskForm/>
            </Box>
            <TasksSection/>
        </HStack>
    )
}