import {Routes,Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {AuthPage,Init} from './../pages'
import PrivateRoute from './privateroutes'
export default function AnimateRoutes(){
    let location = useLocation()
    return (<AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Init/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/home' element={<PrivateRoute><div>home</div></PrivateRoute>}/>
            <Route path='/donation' element={<PrivateRoute><div>donate</div></PrivateRoute>} />
        </Routes>
    </AnimatePresence>)

}