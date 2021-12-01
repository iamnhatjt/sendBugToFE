import React, { useState } from 'react'
import Input from './element/Input'
import './style.scss'
import axios from 'axios'
import url_base, { token } from '../../variable'

function Create() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const [index, setIndex] = useState(5)
    const element=[]
    for(var i =0; i< index; i++){
        element.push(<Input/>)
    }

    var dataPost = []

    function sendDate(){
        for(var i = 0; i< index; i++){
            const child = {keyword: $$('.word')[i].value, mean: $$('.mean')[i].value }
            dataPost.push(child)
            
        }
        axios({
            method:'post',
            url:`${url_base}/createlesson`,
            withCredentials:true,
            data:{
                label: $('.label').value,
                data: dataPost,
                token: token

            }
        })
        .then(data=>{
            if(data.data.status === 'success'){
                alert('Tạo học phần thành công!')
                window.location = '/'
            }
        })
    }

    return (
        <div className='create container py-3'>
            <h1>Tạo học phần mới</h1>
            <input type="text" className='label' placeholder={`Nhập tiêu đề, ví dụ "Tiếng anh 3: component"`}/>
            <div className="input-lesson">
                {element}
            </div>
            <div className="button-control d-flex justify-content-around">
                <div className="n-hover n-btn"
                    onClick={()=>{setIndex(state=> state-1)}}

                >Xóa thẻ</div>
                <div className="n-hover n-btn" 
                    onClick={()=>{setIndex(state=> state+1)}}
                >Thêm thẻ</div>
            </div>
            <div className="text-center my-5">
                <div className="n-hover send-data mt-5" 
                    onClick={sendDate}
                >Tạo học phần</div>
            </div>

            <div className="no-name">

            </div>

        </div>
    )
}

export default Create
