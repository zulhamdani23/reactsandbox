import React, { useEffect, useContext } from 'react'
import {MovieContext} from '../FinalContext/MovieContext'
import {MovieProvider} from '../FinalContext/MovieContext'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import "../aset/movie.css"

const Movie = () => {

    const { movieList, fetchStatus, setFetchStatus, functions } = useContext(MovieContext)
    const { fetchMovie } = functions


    useEffect(() => {

        if(fetchStatus){
            fetchMovie()
            setFetchStatus(false)
        }

    },[fetchStatus, setFetchStatus])

    const handleText = (text, max) => {
        if (text === null) {
            return ""
        } else {
            return text.slice(0, max) + "..."
        }
    }

    return (
        <>
        
            <div className='card-container'>
                {movieList !== null && (
                    <>
                        {movieList.map((e) => {
                            return (
                                <div className="item">
                                    
                                    <img className="fakeimg" style={{borderRadius: "5px", width: "100%", height: "65%", objectFit: "cover" }} src={e.image_url} />
                                    
                                    <div style={{padding: "10px"}}>
                                    <h6 style={{color:"blue"}}>{e.title} ({e.year})</h6>
                                
                                        <p>{handleText(e.description, 100)} <br/>
                                        Rating: {e.rating}/10 <br/>
                                        Durasi: {e.duration} menit</p>
                                       
                                        <br />
                                    </div>
                                  
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
            
        </>
    )
}

export default Movie
