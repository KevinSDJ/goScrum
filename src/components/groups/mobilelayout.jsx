import {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {VStack,Box} from '@chakra-ui/react'
import { Filter } from '../component/filter/filter'
import { TasksMobile } from '../component/item-mobile';

export const MobileLayout=()=>{
    let { data } = useSelector(state => state.tasks)
    let [listdisplay,setList]= useState(data)
    useEffect(()=>{
        if(data){
            setList(data)
        }
    },[data])
    return (<VStack
        spacing={4}
        align='stretch'
        >
            <Box h='auto' paddingTop='4' ><Filter  data={data} setList={setList} direction='column' spacing={0} /></Box>
            <VStack 
            align='stretch'
            h='auto' 
            maxH='calc(100vh - 18rem)'
            overflow='auto'
            spacing={4}
            padding='5px 0'
            >
                {listdisplay.map((e)=><TasksMobile key={e._id}/>)}
            </VStack>
        </VStack>)
}