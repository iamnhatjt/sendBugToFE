import { useState } from "react"
import './style.scss'
import axios from 'axios'

const LoginRegister = ()=>{
    const $ = document.querySelector.bind(document)
    const [login, setLogin]= useState(true)



    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
    
    const postData = ()=>{
        if(!login){
            if($('#userName').value.length < 5 || $('#passWord').value.length< 5){
                $('.notication').innerHTML = 'Your username and password have to min 5 words'
                
            }
            else if($('#passWord').value !== $('#repeatPassword').value){
                $('.notication').innerHTML = 'your password diferent reapeat password'
                
            }
            else{
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/register',
                    data: {
                        username: $('#userName').value,
                        password: $('#passWord').value
                    }
                })
                .then(data=>{
                    if(data.data.status ==='success'){
                            $('.notication').classList.remove('text-danger')
                            $('.notication').classList.add('text-success')
                    }
                    $('.notication').innerHTML = data.data.message
                })
            }
        }
        else{
            axios({
                method: 'post',
                url: 'http://localhost:5000/login',
                data: {
                    username: $('#userName').value,
                    password: $('#passWord').value
                }
            })
            .then(data=>{
                if(data.data.status ==='success'){
                    $('.notication').classList.remove('text-danger')
                    $('.notication').classList.add('text-success')
                }
                $('.notication').innerHTML = data.data.message
                setCookie('token',data.data.token)
                window.location.reload()
            })
        }
        
    }
    
    return(
        <div className="loRe">
            <div className="cover-lore">
                <h1 className='h1 text-center fs-2 mb-5 '>Welcome to Thẻ nhớ</h1>
                <p className='mb-3'> {login ? 'Login to your account' : 'Register to your account'} </p>
                <div className=" d-flex justify-content-around my-4">
                    <span className={login ? 'loRe-check n-hover active ': 'loRe-check n-hover'} onClick={()=>{setLogin(true)}}>Login</span>
                    <span className={login ? 'loRe-check n-hover ': 'loRe-check n-hover active'} onClick={()=>{setLogin(false)}}>Register</span>
                </div>
                <div className="form-data">
                    <div className="uname input">
                        <i className="far fa-user"></i>
                        <input type="text" id='userName' placeholder='Username' />
                    </div>
                    <div className="password input">
                        <i className="fas fa-key"></i>
                        <input type="password" id='passWord' placeholder='Password' />
                    </div>
                    {!login? (
                        <div className="repassword input">
                            <i className="fas fa-lock-open"></i>
                            <input type="password" id='repeatPassword' placeholder='Repeat password' />
                        </div>
                    ): ""}

                    <div >
                        <span className='notication text-danger'></span>
                    </div>
                    <div className=" my-3 n-hover">
                        <span className='post-data' onClick={postData}>
                            {login? 'Login':'Register'}

                        </span>
                    </div>
                </div>
                <span className='note'>
                    user name and password have to min length five words!
                </span>
            </div>
        </div>
    )
}

export default LoginRegister