import React, {useContext} from 'react'
import Cookies from 'js-cookie'
import {MovieContext} from '../FinalContext/MovieContext'
import {GameContext} from '../FinalContext/GameContext'
import Movieku from '../aset/movie.png'
import Gameku from '../aset/game.png'

const Dashboard = () => {
    const { movieList } = useContext(MovieContext)
    const { gameList} = useContext(GameContext)
    return  (
        <div style={{backgroundColor:"#92ade0", height:"100vh"}} >
            <h1 style={{ textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Halo, {Cookies.get("name")}. Selamat Menikmati Film dan Game Pilihanmu, Ya!</h1>
            <div className='movieku' style={{width: "300px", border: "1px solid rgb(154, 152, 165)"}}>
                <img src={Movieku} style={{ width: "50%", height: "50%", objectFit: "cover" , borderRadius: "5px"}} />
            <p style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>Total Movies Kamu: {movieList.length}</p>
            </div>
            <div className='gameku' style={{width: "300px", border: "1px solid rgb(154, 152, 165)"}}>
            <img src={Gameku} style={{ width: "50%", height: "50%", objectFit: "cover" , borderRadius: "5px"}}/>
            <p style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>Total Games Kamu: {gameList.length} </p>
            </div>
        </div>
    )
    
}

export default Dashboard