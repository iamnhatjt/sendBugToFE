import React, {useLayoutEffect, useState} from 'react'
import App from './App'
import Home from './feature/Home'
import { Route, Routes } from 'react-router'
import LoginRegister from './feature/LoginRegister'
import { getData } from './feature/Home/reducer'
import {useDispatch,useSelector} from 'react-redux'

function RouterSetting() {
    const dispatch = useDispatch()
    const a = useSelector(state=> state.lesson)
    const [check, setCheck]= useState(false)
    useLayoutEffect(() => {
        async function  resData(){
            const RESDate = await dispatch(getData())
            if(RESDate.payload.data.status === "success"){
                setCheck(true)
            }
        }
        resData();
        
    },[check])
    return (
        <div>
            <Routes>
                <Route path='/' element={check? <App/>: <LoginRegister/>}>
                    <Route path='/' element={<Home/>} />
                </Route>
            </Routes>
            {console.log('check asfdas: ', )}
        </div>
    )
}

export default RouterSetting
