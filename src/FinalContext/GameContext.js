import axios from 'axios'
import React, { createContext, useState } from 'react'

export const GameContext = createContext()

export const GameProvider = props => {
    const [gameList, setGameList] = useState([])
    const [inputGame, setInputGame] = useState({
        genre:'',
        image_url:'',
        singlePlayer:'true',
        multiplayer:'true',
        name:'',
        platform:'',
        release:''
    })
    const [gameId, setGameId] = useState(-1)

    const fetchGame = async () => {
        let daftarGame = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        let dataGame = daftarGame.data
        let outputGame = dataGame.map ((e) => {
            return {
                id : e.id, 
                genre : e.genre,
                image_url: e.image_url,
                singlePlayer: e.singlePlayer,
                multiplayer: e.multiplayer,
                name: e.name,
                platform: e.platform,
                release: e.release
            }
            })
            setGameList(outputGame)
        }

    const editGame = (idGame) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${idGame}`)
        .then (res => {
            let data = res.data
            setInputGame(data.name)
            setGameId(data.id)
        })
    }    
    const deleteGame = (idGame) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`)
            .then (() => {
                let newGameList = gameList.filter((m) => {return m.id !== idGame })
                setGameList(newGameList)
            })
        
    }    

    const submitGame = (params) => {
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
            genre : inputGame.genre,
            image_url: inputGame.image_url,
            singlePlayer: inputGame.singlePlayer,
            genre: inputGame.genre,
            multiplayer: inputGame.multiplayer,
            name: inputGame.name,
            platform: inputGame.platform,
            release: inputGame.release
        })
          .then(res => {
              let data = res.data
              setMovieList([...gameList, {
                  id: data.id,
                  genre: data.genre,
                  image_url: data.image_url, 
                  singlePlayer: data.singlePlayer,
                  multiplayer: data.multiplayer,
                  name: data.name,
                  platform: data.platform,
                  release: data.release
                }])
          })
    }

    const updateGame = (params) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${gameId}`, {
            genre : inputGame.genre,
            singlePlayer: inputGame.singlePlayer,
            genre: inputGame.genre,
            multiplayer: inputGame.multiplayer,
            image_url: inputGame.image_url,
            name: inputGame.name,
            platform: inputGame.platform,
            release: inputGame.release
            })
          .then(() => {
              let dataBaruGame = movieList.find(el=> el.id === gameId)
              dataBaruGame.genre= inputGame.genre
              dataBaruGame.singlePlayer= inputGame.singlePlayer
              dataBaruGame.genre= inputGame.genre
              dataBaruGame.multiplayer= inputGame.multiplayer
              dataBaruGame.image_url= inputGame.image_url
              dataBaruGame.name= inputGame.name
              dataBaruGame.platform= inputGame.platform
              dataBaruGame.release= inputGame.release
              setMovieList([...gameList])
          })      
    }
    const functions = {
            fetchGame,
            deleteGame,
            submitGame,
            updateGame,
            editGame
        }
        
    return (
        <GameProvider value={{
            gameList,
            setGameList,
            inputGame,
            setInputGame,
            gameId,
            setGameId,
            functions
        }}>
            {props.children}
        </GameProvider>
    )
}