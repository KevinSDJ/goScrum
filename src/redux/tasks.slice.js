import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../utilities/settings'




const taskSlice = createSlice({
    initialState:{data:[],status:'',error:''},
    name:'tasks',
    reducers:{
        cleanReqMsg:(state,action)=>{
            return {...state,status:'',error:''}
        }
    },extraReducers:(builder)=>{
        builder.addCase(getTasks.pending,(state,action)=>{
            return {...state,status:'pending'}
        })
        builder.addCase(getTasks.fulfilled,(state,action)=>{
            return {...state,status:'success',data:action.payload.result}
        })
        builder.addCase(getTasks.rejected,(state,action)=>{
            return {...state,status:'error',error:action.response}
        })
        /*------------------create task------------------*/
        builder.addCase(postTask.fulfilled,(state,action)=>{
            state.status='success'
        })
        builder.addCase(postTask.rejected,(state,action)=>{
            state.status='error'
            state.error=action.payload.response
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