import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('lesson', async ()=>{
    const data =  await  axios({
        method:'get',
        url:'https://nhatjt-mobile.herokuapp.com/get',
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