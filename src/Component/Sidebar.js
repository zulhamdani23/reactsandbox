import Cookies from 'js-cookie'
import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import "../aset/Sidebar.css"


const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <ul > 
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/movie-list'>Movie List</Link></li>
                <li><Link to='/movie-add'>Add New Movie</Link></li>
                <li><Link to='/game-list'>Game List</Link></li>
                <li><Link to='/game-add'>Add New Game</Link></li>
            </ul>
           
        </div>
        </>
    )
}
export default Sidebar