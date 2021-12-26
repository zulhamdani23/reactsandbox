import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useHistory } from "react-router"
import Cookies from 'js-cookie'

export const GameContext = createContext()

export const GameProvider = props => {
    let history = useHistory()
    const [fetchStatus, setFetchStatus] = useState(true)
    const [gameList, setGameList] = useState([])
    const [gameId, setGameId] = useState(-1)
    const [inputGame, setInputGame] = useState({
        genre:'',
        image_url:'',
        singlePlayer:'true',
        multiplayer:'true',
        name:'',
        platform:'',
        release:''
    })
    

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
            setInputGame({
                genre : data.genre,
                image_url: data.image_url,
                singlePlayer: data.singlePlayer,
                multiplayer: data.multiplayer,
                name: data.name,
                platform: data.platform,
                release: data.release 
            })
            setGameId(data.id)
        })
    }    
    const deleteGame = (idGame) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`,  {headers: {"Authorization" : "Bearer "+ Cookies.get("token")}})
            .then (() => {
                let newGameList = gameList.filter((m) => {return m.id !== idGame })
                setGameList(newGameList)
                setFetchStatus(true)
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
        }, {headers: {"Authorization" : "Bearer "+ Cookies.get("token")}} )
          .then(res => {
            setFetchStatus(true)
            history.push('/game-list')
        }).catch((e) => {
            alert(e.response.data.message)
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
            }, {headers: {"Authorization" : "Bearer "+ Cookies.get("token")}} )
          .then(() => {
            setFetchStatus(true)
            history.push('/game-list')
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
        <GameContext.Provider value={{
            gameList,
            setGameList,
            inputGame,
            setInputGame,
            gameId,
            setGameId,
            fetchStatus, 
            setFetchStatus,
            functions
        }}>
            {props.children}
        </GameContext.Provider>
    )
}