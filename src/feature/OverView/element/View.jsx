import React from 'react'
import { Link } from 'react-router-dom'

function View(props) {
    return (
        <div className="col-6 col-md-4 text-center mb-5" >
            <Link to={`${props.id}`} className='link d-flex justify-content-center'>
                <i class="fas fa-folder-open n-hover"></i>
                <div className='ps-4'>
                    <div className='fs-5'>{props.label}</div>
                    <div className='time'>{props.time}</div>

                </div>
            </Link>
        </div>
    )
}

export default View
