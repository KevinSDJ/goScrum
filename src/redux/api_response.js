import {createSlice} from '@reduxjs/toolkit'

let initialState={
    message:'',
    code:''
}

const apiresponse= createSlice({
    initialState,
    name:'ApiResponse',
    reducers:{
        setError:(state,action)=>{
            return {...state,...action.payload}
        },
        clearError:(state)=>{
            return {...state,message:'',code:''}
        }
    }
})

export const {clearError,setError} = apiresponse.actions 
export default apiresponse.reducer