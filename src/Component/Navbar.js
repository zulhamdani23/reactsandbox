import Cookies from 'js-cookie'
import '../aset/Navbar.css'
import Logo from '../aset/Logo.png'
import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from '../FinalContext/UserContext'


const Navbar = () => { 
    const history = useHistory()
    const {loginStatus, setLoginStatus} = useContext(UserContext)
    
    const handleLogout = () =>{
        setLoginStatus(false)
        Cookies.remove('token')
        Cookies.remove('name')
        Cookies.remove('email')
        history.push('/login')
        console.log("logout")
    }
    return (
        <div className="Nav">
            <Link to='/'><img src={Logo} style={{float:"left", marginLeft:"200px"}}/></Link>
            <ul className='list'> 
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movie'>Movie</Link></li>
                <li><Link to='/game'>Game</Link></li>
                <li><Link to='/about'>About</Link></li>
                <div className='auth' style={{float:"right"}}>
                {
                    Cookies.get('token') !== undefined && <li onClick={handleLogout} style={{cursor:"pointer"}}><span style={{float:"right"}}>Logout</span></li>
                }
                {
                    Cookies.get('token') === undefined  && (
                        <>
                         <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                        </>
                   
                    )
                }
                </div>
            </ul>
           
        </div>
    )
}
export default Navbar