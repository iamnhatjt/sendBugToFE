import React, { useState } from 'react'
import './style.scss'
import 'animate.css'

import {useSelector} from 'react-redux'
import axios from 'axios'
import url_base from '../../variable'

function Detail() {
    const [index, setIndex] = useState(0)
    const [check, setCheck] = useState(true)
    const href = window.location.pathname.slice(10,13 )
    const store = useSelector(state => state.lesson.lesson[href].data)
    const label = useSelector(state=> state.lesson.lesson[href].label)

    return (
        <div className='detail pt-5'>
            <div className="">
                <div className=" board d-block mx-auto col-12 col-md-9 animate__animated  "
                    onClick={()=>{
                        if(document.querySelector('.board').classList[6]!=='animate__flipInX'){
                            document.querySelector('.board').className = ' board d-block mx-auto col-12 col-md-9 animate__animated  '
                            document.querySelector('.board').classList.add('animate__flipInX')
                        }
                        else{
                            document.querySelector('.board').className = ' board d-block mx-auto col-12 col-md-9 animate__animated  '
                            document.querySelector('.board').classList.add('animate__flipInY')

                        }
                        setCheck(pre=> !pre)

                    }}
                >
                    <div className="board-child fs-1 ">
                        {check?store[index].keyword:store[index].mean}

                    </div>
                </div>
                <div className="control my-5 text-center d-flex justify-content-around fs-3 text-light">
                    <i class="fas fa-arrow-left n-hover "
                        onClick={()=>{
                            setCheck(true)
                            document.querySelector('.board').className = ' board d-block mx-auto col-12 col-md-9 animate__animated  '
                            document.querySelector('.board').classList.add('animate__fadeOutRight')
                            setTimeout(() => {
                            document.querySelector('.board').className = ' board d-block mx-auto col-12 col-md-9 animate__animated  '
                            document.querySelector('.board').classList.add('animate__fadeInLeft')
                            

                            if(index=== 0){
                                setIndex(store.length-1)
                                return
                            }
                            setIndex(pre=>pre-1)
                            }, 300);

                        }}
                    ></i>
                    {index +1} / {store.length}
                    <i class="fas fa-arrow-right n-hover"
                        onClick={
                            ()=>{
                                setCheck(true)
                                document.querySelector('.board').className = ' board d-block mx-auto col-12 col-md-9 animate__animated  '

                                document.querySelector('.board').classList.add('animate__fadeOutLeft')
                                setTimeout(() => {
                                document.querySelector('.board').className = ' board d-block mx-auto col-12 col-md-9 animate__animated  '
                                document.querySelector('.board').classList.add('animate__fadeInRight')
                                if(index=== store.length-1){
                                    setIndex(0)
                                    return
                                }
                                setIndex(pre=>pre+1)
                                }, 300);
                                
                                
                            }
                        }
                    ></i>
                </div>
            </div>

            <div className="add text-light ">
                <h1 className='py-5'>Thuật ngữ trong phần này</h1>
                {store.map((lesson,index)=>{
                    return(
                        <div className='d-flex justify-content-around text-center' key={index}>
                            <div className='key'>
                                {lesson.keyword}
                            </div>
                            <div className="key-1">:</div>
                            <div className='key'>
                                {lesson.mean}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="d-flex justify-content-around my-5">
                <div className="btn btn-danger"
                    onClick={()=>{
                        if( window.confirm('Sẽ không khôi phục được học phần khi xóa!')==true){
                            axios({
                                method: 'delete',
                                withCredentials: true,
                                url: `${url_base}/deletelesson`,
                                data:{
                                    label: label
                                }

                            })
                            .then(data=>{
                                
                                if(data.data.status==='success'){
                                    alert(data.data.message)
                                    window.location ='/'
                                }
                                else{
                                    alert('lỗi hệ thống')
                                }
                            }
                            )
                            
                        }
                    }}
                >Xóa học phần</div>
                <div className="btn btn-success">Luyện tập học phần</div>

            </div>
            <div className="noname"></div>
        </div>
    )
}

export default Detail
