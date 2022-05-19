import React from 'react';
import {
    Container,
} from '@chakra-ui/react';
import { Signin } from '../atomic/organisms/Forms';

const AuthPage = () => {
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
            <Signin/>
        </Container>
    )
}

export default AuthPage