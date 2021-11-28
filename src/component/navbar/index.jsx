
import { Link } from 'react-router-dom'
import './style.scss'

const Navbar = ()=>{
    return (
        <nav className='n-navbar d-flex justify-content-around fs-3'>

            
            <div className="n-nav-item nav-border">
                <Link to='' className='link n-hover' ><i className="fas fa-home"></i></Link>
            </div>
            <div className="n-nav-item nav-border">
                <Link to='' className='link n-hover' >
                <i className="fas fa-book"></i>
                </Link>
            </div>
            <div className="n-nav-item nav-border">
                <Link to='' className='link n-hover' >
                <i className="fab fa-studiovinari"></i>
                </Link>
            </div>
            <div className="n-nav-item nav-border">
                <Link to='' className='link n-hover' ><i className="fas fa-home"></i></Link>
            </div>
        </nav>
    )
}

export default Navbar