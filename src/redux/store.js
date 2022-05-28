import {configureStore,combineReducers} from '@reduxjs/toolkit'
import tasksReducer from './tasks.slice'
import userReducer from './user.slice'
import apireducer from './api_response'

export const store= configureStore({
    reducer:combineReducers({tasks:tasksReducer,user:userReducer,ApiResponse:apireducer})
})