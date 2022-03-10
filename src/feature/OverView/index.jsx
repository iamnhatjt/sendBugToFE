import React from 'react'
import {useSelector} from 'react-redux'
import View from './element/View'
import './style.scss'

function OverView() {
    
    const store = useSelector(state => state.lesson.lesson)
    function handleTime(time){
        time = time.split('-')
        time[2]= time[2].slice(0,2)
        return `Ngày ${time[2]} tháng ${time[1]} năm ${time[0]}`
    }
    return (
        <div className='container overview py-5'>
            <div className="row">
                
                {store.length=== 0 ? (<h1>Bạn chưa có học phần, Vào tạo học phần ngay thôi  !</h1>) : ''}
                {store.map((lessons,index)=> {
                    return(
                        <>
                            <View label={lessons.label} time={handleTime(lessons.createAt)} id={index} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default OverView
