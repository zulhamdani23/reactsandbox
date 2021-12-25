import React, { useEffect, useContext } from "react"
import {MovieContext} from '../FinalContext/MovieContext'

const MovieForm = () => {
  const { inputMovie, setInputMovie, movieId, setMovieId, functions} = useContext(MovieContext)
  const {fetchMovie, submitMovie, updateMovie} = functions

   useEffect(() => {
       fetchMovie()
   }, [])
    const handleChange = (event) =>{
        let typeOfValue = event.target.value
        let title = event.target.title
        setInputMovie({...inputMovie, [title]:typeOfValue})
      }
      const handleSubmit = (event) =>{
        event.preventDefault()
    
        if (movieId === -1){
          submitMovie()
        }else{
          updateMovie()
        }
        setInputMovie({
            title:'',
            description:'',
            genre:'',
            rating:'',
            image_url:'',
            duration:'',
            year:'',
            review: '' 
        })
        setMovieId(-1)
      }
    return (
        <div>
            <h1>Movie Form </h1>
            <form method="post" onSubmit={handleSubmit} className="form-nilai">
            <div>
                <label>Judul Film</label>
                <input onChange={handleChange} value={inputMovie.title} name="title" type="text" required />
                <br />
                <label>Deskripsi</label>
                <input onChange={handleChange} value={inputMovie.description} name="description" type="text" required />
                <br />
                <label>Genre</label>
                <input onChange={handleChange} value={inputMovie.genre} name="genre" type="text" required />
                <br />
                <label>Rating</label>
                <input onChange={handleChange} value={inputMovie.rating} name="rating" type="number" required />
                <br />
                <label>Durasi</label>
                <input onChange={handleChange} value={inputMovie.duration} name="duration" type="number" required />
                <br />
                <label>Review</label>
                <input onChange={handleChange} value={inputMovie.review} name="review" type="text" required />
                <br />               
                <label>URL</label>
                <input onChange={handleChange} value={inputMovie.image_url} name="image_url" type="text" required />
                <br />
                <label>Tahun Rilis</label>
                <input onChange={handleChange} value={inputMovie.year} name="year" type="number" required />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}

export default MovieForm
