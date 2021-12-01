import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import url_base, { token } from "../../variable";

export const getData = createAsyncThunk('lesson', async ()=>{
    const data =  await  axios({
        withCredentials: true,
        method:'post',
        url:`${url_base}/get`,
        data:{
            token: token || ' '
        }
    })
    return data
})

const lesson = createSlice({
    name: 'lesson',
    initialState: {lesson: []},
    reducers:{
        setToken: (state, action)=>{
            state.token = action.payload
        }
    },
    extraReducers: {
        [getData.fulfilled]: (state, action)=>{
            state.lesson = action.payload.data.data
        }
    }
})

export const {setToken} = lesson.actions

export default lesson.reducer