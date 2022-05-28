import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../utilities/settings'




const taskSlice = createSlice({
    initialState:{data:[],status:''},
    name:'tasks',
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getTasks.pending,(state,action)=>{
            return {...state,status:'loading'}
        })
        builder.addCase(getTasks.fulfilled,(state,action)=>{
            return {...state,status:'success',data:action.payload.result}
        })
        /*------------------create task------------------*/
        builder.addCase(postTask.pending,(state,action)=>{
            return {...state,status:'loading'}
        })
        builder.addCase(postTask.fulfilled,(state,action)=>{
            state.status='success'
        })
    }
})


export const postTask= createAsyncThunk('tasks/postTask',async(data)=>{
    let token=JSON.parse(localStorage.getItem('goScrumtk'))
    let response=await axios.post(`${ENDPOINT}/task`,{task:data},{headers:{"Authorization":`Bearer ${token}`}})
    return response.data
})

export const getTasks=createAsyncThunk('tasks/getTasks',async ()=>{
    let token=JSON.parse(localStorage.getItem('goScrumtk'))
    let response=await axios.get(`${ENDPOINT}/task`,{headers:{"Authorization":`Bearer ${token}`}})
    return response.data
})
export const {cleanReqMsg} = taskSlice.actions

export default taskSlice.reducer