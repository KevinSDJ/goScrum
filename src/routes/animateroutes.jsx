import {Routes,Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import AuthPage from '../pages/auth'
import Home from '../pages/home'

export default function AnimateRoutes(){
    let location = useLocation()
    return (<AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route index path='/' element={<Home/>}/>
        </Routes>
    </AnimatePresence>)

}