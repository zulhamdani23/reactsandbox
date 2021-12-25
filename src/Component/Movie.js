import React from 'react'
import {MovieProvider} from '../FinalContext/MovieContext'
import MovieForm from './MovieForm'
import MovieList from './MovieList'

const Movie = () => {
    return (
        <div>
            <MovieProvider>
                <MovieList />
                <MovieForm />
            </MovieProvider>
        </div>
    )
}

export default Movie