import {Container} from '@chakra-ui/react'
import { DonateBox } from '../atomic/molecules'

export default function DonatePage(){

    return (
    <Container
        maxW={'100vw'}
        margin={'0'}
        h={'100vh'}
        display={'flex'}
        bgColor={'#E5E5E5'}
        flexShrink={'0'}
        alignItems={'center'}
        justifyContent={'center'}
    >
        <DonateBox/>
    </Container>)
}