import React from 'react'
import "./Navigasi.css"

const Navigasi = () => {
    return (
        <>
        <div className="nav">
        <ul>
             <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
             <li><a href="contact.asp">Contact</a></li>
             <li><a href="about.asp">About</a></li> 
        </ul>
        </div>
        <div className='search'>
        <input type="text" name="search"></input>
        <button>Login</button>
        </div>
        </>
        
    )
}

export default Navigasi
