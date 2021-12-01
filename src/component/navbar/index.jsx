
import { Link } from 'react-router-dom'
import './style.scss'

const Navbar = ()=>{
    return (
        <nav className='n-navbar d-flex justify-content-around fs-3'>

            
            <div className="n-nav-item nav-border">
                <Link to='' className='link n-hover' ><i className="fas fa-home"></i></Link>
            </div>
            <div className="n-nav-item nav-border">
                <Link to='/create' className='link n-hover' >
                <i className="fas fa-book"></i>
                </Link>
            </div>
            <div className="n-nav-item nav-border">
                <Link to='/overview' className='link n-hover' >
                <i className="fab fa-studiovinari"></i>
                </Link>
            </div>
            <div className="n-nav-item nav-border">
                <Link to='/' className='link n-hover' 
                    onClick={()=>{
                        document.cookie = 'token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        window.location = '/'
                    }}
                ><i class="fas fa-sign-out-alt"></i></Link>
            </div>
        </nav>
    )
}

export default Navbar