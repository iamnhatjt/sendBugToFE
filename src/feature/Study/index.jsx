import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import './style.scss'
import 'animate.css'


function Study() {
    const labe = window.location.pathname.split('/')[2]
    const store = useSelector(state=> state.lesson.lesson[labe].data)
    const [storeDate, setStoreDate] = useState(store)
    const [index, setIndex]= useState(0)

    const [checkAnswer, setCheckAnswer] = useState(0)

    useEffect(()=>{
        const array = []
        for(var i of store){
            array.push(i)
        }
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());  
        setStoreDate(shuffledArray)
    },[])

    function handleInput(e){
        if(e.keyCode === 13){
            if(storeDate[index].mean.includes(e.target.value)){
                setCheckAnswer(pre=>pre + 1)
                document.querySelector('.bonus').innerHTML= storeDate[index].mean
                document.querySelector('.bonus').className = 'text-center bonus fs-4 animate__animated text-success animate__fadeInDown'
            }
            else{
                document.querySelector('.bonus').innerHTML= storeDate[index].mean
                document.querySelector('.bonus').className = 'text-center bonus fs-4 animate__animated text-danger animate__fadeInDown'
            }
            
            setTimeout(() => {
                document.querySelector('.bonus').className = 'text-center bonus fs-4'
                document.querySelector('.bonus').innerHTML = ''

               if(index == storeDate.length -1){
                    document.querySelector('.bonus').innerHTML = `Bạn đã hoàn thành bài học, đúng: ${checkAnswer} / ${storeDate.length}`

               }
               else{
                    setIndex(pre=> pre+ 1)
               }
            }, 1000);
            e.target.value = ''
        }
    }

    return (
        <div className='study'>
            <div className="board">
                <h1 className='fs-3'>Keyword:  {index + 1} / {storeDate.length}</h1>
                <div className='fs-1 text-center mb-5'>{storeDate[index].keyword}</div>
                <div className="text-center bonus fs-4">
                </div>
                <h1 className='fs-3 mean'>Mean:</h1> 
                <div className='answer'>
                    <input type="text" placeholder='Nhập nghĩa...' onKeyUp={handleInput} />
                </div>
            </div>
        </div>
    )
}

export default Study
