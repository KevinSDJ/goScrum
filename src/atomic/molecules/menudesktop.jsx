import { MenuListItems } from "."
import { Menubtn } from "../atoms/buttons"
import { Menu ,Box} from "@chakra-ui/react"
import {FiSettings} from 'react-icons/fi'
import {HiLogout} from 'react-icons/hi'

let list=[{item_name:"config",icon:<FiSettings/>},{item_name:"logout",icon:<HiLogout/>}]
export const MenuDesktop=()=>{
    return (
         <Box>
             <Menu>
                <Menubtn />
               <MenuListItems  list={list}/>
            </Menu>
        </Box>)
}