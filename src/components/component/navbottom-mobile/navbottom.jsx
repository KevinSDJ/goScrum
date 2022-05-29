import {Button, HStack,Icon,Spacer} from '@chakra-ui/react'
import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {IoMdAddCircle} from 'react-icons/io'
import {BiDonateBlood} from 'react-icons/bi'
let items=[]

export const NavMobile=()=>{
    return <><HStack spacing={'50'} justify='center' paddingBottom={'15px'} h={'calc(4rem)'} bgColor={'blue'}>
        <Button 
        bgColor={'transparent'} 
        variant={'link'}
        _focus={{outline:'none',border:'none'}}
        >
            <Icon as={HiHome} w={6} h={6}/>
        </Button>
        <Button 
        pos={'relative'} 
        bgColor={'transparent'} 
        variant={'link'}
        _focus={{outline:'none',border:'none'}}
        >
            <Icon top={'calc(-4rem)'} bgColor={'blue'} borderRadius={'full'} position={'absolute'} as={IoMdAddCircle} w={'20'} h={'20'}/>
        </Button>
        <Button 
        bgColor={'transparent'} 
        variant={'link'}
        _focus={{outline:'none',border:'none'}}
        >
            <Icon as={FaUser}  bg w={6} h={6}/>
        </Button>
    </HStack></>
}