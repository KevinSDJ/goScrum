import {Input,useBreakpointValue} from '@chakra-ui/react'


export const InputFrm=({type,...args})=>{
    return(<Input pointerEvents={'all'} id={type} type={type} {...args}  bg={useBreakpointValue({ base: '#fff', sm: 'transparent' })} required/>)
}