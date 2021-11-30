import React from 'react'
import 'animate.css';
import './style.scss'

function Loading() {
    return (
        <div className='loading'>
            <div className="animate__animated animate__bounce animate__slow animate__infinite fs-1">
                Loading...
            </div>
        </div>
    )
}

export default Loading
