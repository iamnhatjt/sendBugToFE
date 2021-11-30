
import React, {useState, useEffect} from 'react'
import './style.scss'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import 'animate.css';

function Index() {
    const [minutes, setMinutes] = useState(1)

    const lesson = useSelector(state => state.lesson.lesson)


    useEffect(() => {
        setTimeout(() => {
            setMinutes(state=>state+1)
        }, 1000);
        return () => {
            clearTimeout(()=>{
                setMinutes(state=>state+1)
            },1000)
        }
    })

    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className='home container-fluid '>
            <span className='d-none'>{minutes}</span>
            
            <div className="row py-2">
                <div className="col-md-6 col-12 text-center m-md-0 my-3">
                    <div className="time text-light">
                        <div className="time-hours ">
                            {date.getHours()} : {date.getMinutes()< 10 ? ('0'+date.getMinutes()): (date.getMinutes())}
                        </div>
                        <div className="time-days">
                            {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12 ">
                    <div className="home-second">
                            <div className="text time-days text-center text-light">
                                phát triển bản thân mỗi ngày bạn nhé!
                            </div>
                            <div className="lesson fs-1 text-center my-2">
                                <Link to='/' className='link'>
                                bạn có {lesson.length} học phần
                                </Link>
                            </div>
                            <div className="welcome fs-2 text-center animate__animated animate__infinite animate__heartBeat animate__slow">
                                welcome Thẻ nhớ
                            </div>
                    </div>
                </div>
            </div>
            

            
            

        </div>
    )
}

export default Index
