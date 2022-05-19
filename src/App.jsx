'useStrict'
import {BrowserRouter} from 'react-router-dom'
import AnimateRoutes from "./routes/animateroutes"
function App() {
  return (
    <BrowserRouter>
       <AnimateRoutes/>
    </BrowserRouter>
  )
}

export default App
