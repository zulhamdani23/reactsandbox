import React, { useEffect, useContext } from "react"
import {GameContext} from '../FinalContext/GameContext'
import { useParams } from "react-router"
import '../aset/Gameform.css'
const GameForm = () => {
  let {Id} = useParams()
  const { inputGame, setInputGame, gameId, setGameId, functions} = useContext(GameContext)
  const { submitGame, updateGame, editGame} = functions

  useEffect(() => {
    if(Id !== undefined){
        editGame(Id)
    }
},[])
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
        <div style={{backgroundColor:"#92ade0", height:"100vh"}}>
            
              <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Game Form </h1>
            
            <form method="post" onSubmit={handleSubmit} className="form-nilai">
            <div className="input1" style={{display:"block"}}>
                <label className="label">Judul Film</label> <br />
                <input onChange={handleChange} value={inputGame.name} name="name" type="text" required />
                <br />
                <label>Tahun Rilis</label> <br />
                <input onChange={handleChange} value={inputGame.release} name="release" type="number" required />
                <br />
                <label>Genre</label> <br />
                <input onChange={handleChange} value={inputGame.genre} name="genre" type="text" required />
                <br />
                <label>Platform</label> <br />
                <input onChange={handleChange} value={inputGame.platform} name="platform" type="text" required />
                <br />
                <label>Player</label> <br />
                <input onChange={handleChange} value={inputGame.duration} name="duration" type="number" required />
                <br />            
                <label>URL</label><br />
                <input onChange={handleChange} value={inputGame.image_url} name="image_url" type="text" required />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}

export default GameForm
