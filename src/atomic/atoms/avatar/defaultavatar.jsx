import { Avatar } from "@chakra-ui/react"
import { useResize } from "../../../hooks"



export const AvatarDefault=({...args})=>{
    const {screen} = useResize()
    return <Avatar size={(screen<=900&&'sm')||'md'} {...args}/>
}