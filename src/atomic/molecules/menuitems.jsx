import {MenuItem,MenuList} from '@chakra-ui/react'

export const MenuListItems=({list,handleclick})=>{
    return (<MenuList >
        {list.map((e,i)=><MenuItem  onClick={handleclick} key={e.item_name+i} icon={e.icon} >
          {e.item_name}
        </MenuItem>)}
      </MenuList>)
}