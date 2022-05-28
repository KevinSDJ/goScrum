import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../utilities/settings'




const userData=createSlice({
    initialState:{
        data:JSON.parse(localStorage.getItem('goScrumUsr'))||'',
        logged:Boolean(JSON.parse(localStorage.getItem('goScrumtk')))||false
    },
    name:'user',
    reducers:{
        logout:(state)=>{
            localStorage.removeItem('goScrumtk')
            localStorage.removeItem('goScrumUsr')
            return {...state,data:{},logged:false}
        }
    }
    ,extraReducers:(builder)=>{
        builder.addCase(fetchSignIn.fulfilled,(state,action)=>{
            localStorage.setItem('goScrumUsr',JSON.stringify(action.payload.result.user))
            localStorage.setItem('goScrumtk',JSON.stringify(action.payload.result.token))
            return {...state,data:action.payload.result.user,success:action.payload.message,logged:true}
        })
        builder.addCase(fetchSignIn.rejected,(state,action)=>{
            console.log(action)
            return {...state,error:action.payload}
        })
    }
})

export const fetchSignIn = createAsyncThunk('user/fetchSignIn',async(data)=>{
        let response = await axios.post(`${ENDPOINT}/auth/login`,data)
        return response.data
})




export const {cleanReqMs,fetchSignUpError,logout} =userData.actions

export default userData.reducer