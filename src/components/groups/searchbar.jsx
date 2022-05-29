import {Input} from '@chakra-ui/react'
import { useId, useRef } from "react"

export const Searchbar = ({setList,data}) => {
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
        <Input type='text' borderColor={'gray'} ref={inputref} maxW={'20rem'} key={useId()} onChange={onChange} placeholder='buscar por titulo' name='search'  required />
    )
}