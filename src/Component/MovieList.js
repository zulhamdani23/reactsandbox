import React, { useEffect, useContext } from "react"
import {MovieContext} from '../FinalContext/MovieContext'
import {useHistory} from 'react-router-dom'
import '../aset/GameList.css'

const MovieList = () => {
    const history = useHistory()
   const {  movieList,  fetchStatus, setFetchStatus, functions} = useContext(MovieContext)
   const {fetchMovie, deleteMovie, editMovie} = functions
   useEffect(() => {

    if (fetchStatus) {
        fetchMovie()
        setFetchStatus(false)
    }


}, [fetchStatus, setFetchStatus])

const handleText = (text, max) => {
    if (text === null) {
        return ""
    } else {
        return text.slice(0, max) + "..."
    }
}

    const handleEdit = (e) => {
        const idMovie = parseInt (e.target.value)
        editMovie(idMovie)
        history.push(`/movie-edit/${idMovie}`)
    }

    const handleDelete = (e) => {
        const idMovie = parseInt (e.target.value)
        deleteMovie(idMovie)
    }

    return (
        <div style={{backgroundColor:"#92ade0", height:"100vh"}}>
            <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Movie List</h1>
            <table id="customers">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Tahun Rilis</th>
                        <th>Deskripsi</th>
                        <th>Rating</th>
                        <th>Durasi</th>
                        <th>Review</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {movieList.map ((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{handleText(item.description, 20)}</td>
                                <td>{item.rating}</td>
                                <td>{item.duration}</td>
                                <td>{handleText(item.review, 20)}</td>
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

export default MovieList