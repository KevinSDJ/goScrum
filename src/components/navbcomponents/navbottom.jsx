import {Button, HStack,Icon,Spacer} from '@chakra-ui/react'
import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {RiAddFill} from 'react-icons/ri'
import {BiDonateBlood} from 'react-icons/bi'
let items=[]

export const NavMobile=()=>{
    return <><HStack spacing={'50'} justify='center' paddingBottom={'15px'} h={'calc(4rem)'} bgColor={'blackAlpha.800'}>
        <Button 
        bgColor={'transparent'} 
        variant={'link'}
        _focus={{outline:'none',border:'none'}}
        >
            <Icon as={HiHome} color='white' w={6} h={6}/>
        </Button>
        <Button 
        pos={'relative'} 
        bgColor={'transparent'} 
        variant={'link'}
        _focus={{outline:'none',border:'none'}}
        >
            <Icon 
            top={'calc(-4rem)'} 
            bgColor={'blue.500'} 
            borderRadius={'full'} 
            position={'absolute'} 
            fontSize={'7xl'}
            padding={'20px'}
            color={'white'}
            as={RiAddFill} 
            />
        </Button>
        <Button 
        bgColor={'transparent'} 
        variant={'link'}
        _focus={{outline:'none',border:'none'}}
        >
            <Icon as={FaUser} color='white'  bg w={6} h={6}/>
        </Button>
    </HStack></>
}