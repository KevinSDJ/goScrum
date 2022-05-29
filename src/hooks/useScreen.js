import {useResize} from './useResize'


export const useScreentype=()=>{
    const {screen} = useResize()

    return screen<=760
}

