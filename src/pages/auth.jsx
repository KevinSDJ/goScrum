import {useState} from 'react';
import {
    Container,
} from '@chakra-ui/react';
import { Signin ,SignUp} from '../atomic/organisms/Forms';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AuthPage = () => {
    const [isSignin,setIsSignin]= useState(true)
    const {logged}= useSelector(state=>state.user)
    let navigate=useNavigate()
    if(logged){
        navigate('/',{replace:true})
    }
    const changesection=(e)=>{
        setIsSignin(!isSignin)
    }
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
            {isSignin&& <Signin changeform={changesection}/>}
            {!isSignin && <SignUp changeform={changesection}/>}
        </Container>
    )
}

export default AuthPage