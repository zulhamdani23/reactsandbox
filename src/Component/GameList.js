import React, { useEffect, useContext } from "react"
import {GameContext} from '../FinalContext/GameContext'

const GameList = () => {
   const {  gameList, functions} = useContext(GameContext)
   const {fetchGame, deleteGame, editGame} = functions
    useEffect(() => {
        fetchGame()
    }, [])

    const handleEdit = (e) => {
        const idGame = parseInt (e.target.value)
        editGame(idGame)
    }

    const handleDelete = (e) => {
        const idGame = parseInt (e.target.value)
        deleteGame(idGame)
    }

    return (
        <>
            <h1>Game List</h1>
            <table>
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
        </>

    )
}

export default GameList