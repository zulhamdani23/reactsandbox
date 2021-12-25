import React, { useEffect, useContext } from "react"
import {MovieContext} from '../FinalContext/MovieContext'

const MovieList = () => {
   const {  movieList, functions} = useContext(MovieContext)
   const {fetchMovie, deleteMovie, editMovie} = functions
    useEffect(() => {
        fetchMovie()
    }, [])

    const handleEdit = (e) => {
        const idMovie = parseInt (e.target.value)
        editMovie(idMovie)
    }

    const handleDelete = (e) => {
        const idMovie = parseInt (e.target.value)
        deleteMovie(idMovie)
    }

    return (
        <>
            <h1>Movie List</h1>
            <table>
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
                                <td>{item.description}</td>
                                <td>{item.rating}</td>
                                <td>{item.duration}</td>
                                <td>{item.review}</td>
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

export default MovieList