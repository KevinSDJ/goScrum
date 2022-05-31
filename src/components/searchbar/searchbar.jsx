import {Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import { useId, useRef } from "react"
import { useScreentype } from '../../hooks'
import {RiSearch2Line} from 'react-icons/ri'

export const Searchbar = ({setList,data}) => {
    const iseMobile= useScreentype()
    let inputref=useRef()
    let timeout
    const onChange = (e) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (inputref.current.value !== '') {
                setList(data.filter(e=> e.title.startsWith(inputref.current.value)))
            } else {
                setList(data)
            }
            clearTimeout(timeout)
        }, 500)
    }
    return (
        <InputGroup w={'auto'}>
        <InputLeftElement
          pointerEvents='none'
          children={<RiSearch2Line color='gray.300' />}
        />
        <Input 
        type='text' 
        borderColor='gray' 
        ref={inputref} 
        maxW={(iseMobile&&'100%')||'20rem'} 
        key={useId()} onChange={onChange} 
        placeholder='buscar por titulo....' 
        name='search'  
        required />
        </InputGroup>  
    )
}