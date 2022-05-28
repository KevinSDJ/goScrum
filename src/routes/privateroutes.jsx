import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

const PrivateRoute=({children})=>{
    let {logged} = useSelector(state=>state.user)
    if(logged){
        return children
    }
    return <Navigate to={'/auth'} replace={true}/>
    
}
export default PrivateRoute