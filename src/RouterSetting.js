import React, {useLayoutEffect, useState, lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router'
import LoginRegister from './feature/LoginRegister'
import { getData } from './feature/Home/reducer'
import {useDispatch,useSelector} from 'react-redux'

import App from './App'
import Home from './feature/Home'
import Loading from './component/Loading'

const Create = lazy(()=>import('./feature/Create'))
const OverView = lazy(()=> import('./feature/OverView'))

function RouterSetting() {
    const dispatch = useDispatch()
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
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={check? <App/>: <LoginRegister/>}>
                        <Route path='/' element={<Home/>} />
                        <Route path='/create' element={<Create/>} />
                        <Route path='/overview' element={<OverView/>} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default RouterSetting
