import {Button,useMediaQuery} from '@chakra-ui/react'
import {motion} from 'framer-motion'

export const  Primarybtn= ({label,...args})=>{
    
    return <Button {...args} >{label}</Button>
}

