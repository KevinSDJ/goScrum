import {Routes,Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import AuthPage from '../pages/auth'
import Home from '../pages/home'
import DonatePage from '../pages/donate'

export default function AnimateRoutes(){
    let location = useLocation()
    return (<AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/donation' element={<DonatePage/>} />
        </Routes>
    </AnimatePresence>)

}