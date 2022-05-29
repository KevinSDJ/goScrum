import {useNavigate} from 'react-router-dom'

export const Init =()=>{
    let navigate=useNavigate()

    const onSkip=()=>{
        navigate('/auth')
    }
    return (<>
    <h1>Hola init</h1>
    <button type='button' onClick={onSkip}> skip to auth</button>
    </>)
}
