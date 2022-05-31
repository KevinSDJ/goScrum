import {Heading,Text,useBreakpointValue} from '@chakra-ui/react'
import {useResize} from '../../hooks'

export default function LogoPrimary(){
    const {screen} = useResize()
    return <>
    <Heading 
    color={'#e63803'} 
    fontStyle={'normal'} 
     margin={'0 auto'}  
     fontSize={(screen<=600 &&{base:'3xl',sm:'4x1',md:'lg',lg:'lg'})||{base:'sx',sm:'3xl',md:'4xl',lg:'3xl'}} size={useBreakpointValue({ base: 'md', md: 'lg'})}>
         Go <Text as={'sub'} padding={'0'} fontStyle={'italic'} fontSize={(screen<=600 &&{base:'2x1',sm:'2x1',md:'medium',lg:'2xl'})||{base:'sx',sm:'3xl',md:'4xl',lg:'2xl'}}  fontWeight={700} color={'#677380'}  >Scrum</Text>
     </Heading>
    </>
}