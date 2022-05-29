import {useState} from 'react';
import {
    Container,
} from '@chakra-ui/react';
import { Signin ,SignUp} from '../atomic/organisms/Forms';


const AuthPage = () => {
    const [signin,setIsSignin]= useState(false)
    const [signup,setIsSigup]= useState(false)
    const [init,setInit]= useState(!signin&&!signup)
    
    return (<>
    {
        init&&<div>Init</div>||<Container
        maxW={'100vw'}
        margin={'0'}
        h={'100vh'}
        display={'flex'}
        bgColor={'#E5E5E5'}
        flexShrink={'0'}
        alignItems={'center'}
        justifyContent={'center'}
    >
        {signin&&!init&& <Signin changeform={()=>{setIsSignin(!signin)}}/>}
        {signup&&!init&& <SignUp changeform={()=>{setIsSigup(!signup)}}/>}
    </Container>
    }
    </>)
}

export default AuthPage