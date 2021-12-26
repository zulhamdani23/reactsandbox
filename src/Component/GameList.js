import React, { useEffect, useContext } from "react"
import {GameContext} from '../FinalContext/GameContext'
import {useHistory} from 'react-router-dom'
import '../aset/GameList.css'

const GameList = () => {
    const history = useHistory()
   const {  gameList,fetchStatus, setFetchStatus, functions} = useContext(GameContext)
   const {fetchGame, deleteGame, editGame} = functions
   useEffect(() => {

    if (fetchStatus) {
        fetchGame()
        setFetchStatus(false)
    }


}, [fetchStatus, setFetchStatus])


    const handleEdit = (e) => {
        const idGame = parseInt (e.target.value)
        editGame(idGame)
        history.push(`/game-edit/${idGame}`)
    }

    const handleDelete = (e) => {
        const idGame = parseInt (e.target.value)
        deleteGame(idGame)
    }

    return (
        <div style={{backgroundColor:"#92ade0", height:"100vh"}}>
            <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Game List</h1>
            <table id="customers">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Genre</th>
                        <th>Single Player</th>
                        <th>Multi Player</th>
                        <th>Platform</th>
                        <th>Rilis</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {gameList.map ((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.genre}</td>
                                <td>{item.singlePlayer === 0 ? "false" : "true"}</td>
                                <td>{item.multiplayer === 0 ? "false" : "true"}</td>
                                <td>{item.platform}</td>
                                <td>{item.release}</td>
                                <td>
                                    <button onClick={handleEdit} value={item.id}>Edit</button>
                                    <button onClick={handleDelete} value={item.id}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default GameList