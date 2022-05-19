import { MenuButton } from '@chakra-ui/react'
import {IconButton} from '@chakra-ui/react'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { AvatarDefault } from '../avatar/defaultavatar'
export const Menubtn = () => {
    return (<MenuButton
        as={IconButton}
        margin={'0'}
        boxSize='fit-content'
        borderRadius={'full'}
        icon={<AvatarDefault  name="adebayo" src='https://bit.ly/sage-adebayo'/>}
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'none' }}
    />
    )
}