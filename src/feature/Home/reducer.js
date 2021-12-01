import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import url_base from "../../variable";

export const getData = createAsyncThunk('lesson', async ()=>{
    const data =  await  axios({
        withCredentials: true,
        method:'get',
        url:`${url_base}/get`,
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