import {Routes,Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {AuthPage,DonatePage,Home,Init} from './../pages'
import PrivateRoute from './privateroutes'
export default function AnimateRoutes(){
    let location = useLocation()
    return (<AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Init/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path='/donation' element={<PrivateRoute><DonatePage/></PrivateRoute>} />
        </Routes>
    </AnimatePresence>)

}