import {Link} from '@chakra-ui/react'
import {Link as ReactLink} from 'react-router-dom'
export const PrimaryLink =({to,color='gray',name})=>{
    return <Link as={ReactLink} to={to||'#'} color={color} >{name|| 'route'}</Link>
}