import React from 'react'

function Input() {
    return (
        <div className='my-3 Input-element d-flex justify-content-around'>
            <div>
                <input type="text" className='me-5 word'  />
                <p>Thuật ngữ</p>
            </div>
            <div>
                <input type="text" className='mean' />
                <p>Định nghĩa</p>
            </div>
        </div>
    )
}

export default Input
