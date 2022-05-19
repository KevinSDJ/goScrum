import { useState, useEffect } from "react"
export const useResize=()=>{
    const [screen,setScreen] = useState(window.innerWidth)
    useEffect(()=>{
        const resize =(e)=>{
            setScreen(window.innerWidth)
        }
        window.addEventListener('resize',resize)

        return ()=>{window.removeEventListener('resize',resize,false)}
    },[])

    return {screen}
}
