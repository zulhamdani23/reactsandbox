import React, { useEffect, useContext } from "react"
import {GameContext} from '../FinalContext/GameContext'

const GameForm = () => {
  const { inputGame, setInputGame, gameId, setGameId, functions} = useContext(GameContext)
  const {fetchGame, submitGame, updateGame} = functions

   useEffect(() => {
       fetchGame()
   }, [])
    const handleChange = (event) =>{
        let typeOfValue = event.target.value
        let name = event.target.name
        setInputGame({...inputGame, [name]:typeOfValue})
      }
      const handleSubmit = (event) =>{
        event.preventDefault()
    
        if (gameId === -1){
          submitGame()
        }else{
          updateGame()
        }
        setInputGame({
            genre:'',
            image_url:'',
            singlePlayer:'true',
            multiplayer:'true',
            name:'',
            platform:'',
            release:'' 
        })
        setGameId(-1)
      }
    return (
        <div>
            <h1>Game Form </h1>
            <form method="post" onSubmit={handleSubmit} className="form-nilai">
            <div>
                <label>Judul Film</label>
                <input onChange={handleChange} value={inputGame.name} name="name" type="text" required />
                <br />
                <label>Tahun Rilis</label>
                <input onChange={handleChange} value={inputGame.release} name="release" type="number" required />
                <br />
                <label>Genre</label>
                <input onChange={handleChange} value={inputGame.genre} name="genre" type="text" required />
                <br />
                <label>Platform</label>
                <input onChange={handleChange} value={inputGame.platform} name="platform" type="text" required />
                <br />
                <label>Player</label>
                <input onChange={handleChange} value={inputGame.duration} name="duration" type="number" required />
                <br />            
                <label>URL</label>
                <input onChange={handleChange} value={inputGame.image_url} name="image_url" type="text" required />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}

export default GameForm
