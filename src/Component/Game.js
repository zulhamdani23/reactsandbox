import React from 'react'
import {GameProvider} from '../FinalContext/GameContext'
import GameForm from './GameForm'
import GameList from './GameList'

const Movie = () => {
    return (
        <div>
            <GameProvider>
                <GameList />
                <GameForm />
            </GameProvider>
        </div>
    )
}

export default Movie