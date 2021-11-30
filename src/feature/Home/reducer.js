import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('lesson', async ()=>{
    const data =  await  axios({
        method:'get',
        url:'http://localhost:5000/get',
        withCredentials: true
    })
    return data
})

const lesson = createSlice({
    name: 'lesson',
    initialState: {lesson: []},
    reducers:{
        
    },
    extraReducers: {
        [getData.fulfilled]: (state, action)=>{
            state.lesson = action.payload.data.data
        }
    }
})

export const {setUserName} = lesson.actions

export default lesson.reducer