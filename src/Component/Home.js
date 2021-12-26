import React from 'react'
import "../aset/home.css"
import Sidebar from './Sidebar'
import Cookies from 'js-cookie'
import Movie from './Movie'
import Game from './Game' 

const Home = () => {
    return (
        <>
        <div className='Home'>
            {Cookies.get('token') && <Sidebar /> }
            <div className='contain'>
                <div className='' style={{flex:"1"}}>
                    <h1>Latest Movies</h1>
                    <Movie/>
                </div>
                <br />
                <div className='game'>
                    <h1>Latest Games</h1>
                    <Game/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home