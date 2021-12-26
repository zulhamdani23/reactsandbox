import React, { useEffect, useContext } from "react"
import {MovieContext} from '../FinalContext/MovieContext'
import { useParams } from "react-router"
import '../aset/Gameform.css'

const MovieForm = () => {
  let {Id} = useParams()
  const { inputMovie, setInputMovie,  movieId, setMovieId, functions} = useContext(MovieContext)

  const { submitMovie, updateMovie, editMovie} = functions

   useEffect(() => {
        if(Id !== undefined){
            editMovie(Id)
        }
    },[])

    const handleChange = (event) =>{
        let typeOfValue = event.target.value
        let name = event.target.name
        setInputMovie({...inputMovie, [name]:typeOfValue})
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
        <div style={{backgroundColor:"#92ade0", height:"100vh"}}>
            <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Movie Form </h1>
            <form method="post" onSubmit={handleSubmit} className="form-nilai">
            <div className="input1" style={{display:"block"}}>
                <label className="label">Judul Film</label> <br />
                <input onChange={handleChange} value={inputMovie.title} name="title" type="text" required />
                <br />
                <label>Deskripsi</label> <br />
                <input onChange={handleChange} value={inputMovie.description} name="description" type="text" required />
                <br />
                <label>Genre</label> <br />
                <input onChange={handleChange} value={inputMovie.genre} name="genre" type="text" required />
                <br />
                <label>Rating</label> <br />
                <input onChange={handleChange} value={inputMovie.rating} name="rating" type="number" required />
                <br />
                <label>Durasi</label> <br />
                <input onChange={handleChange} value={inputMovie.duration} name="duration" type="number" required />
                <br />
                <label>Review</label> <br />
                <input onChange={handleChange} value={inputMovie.review} name="review" type="text" required />
                <br />               
                <label>URL</label> <br/>
                <input onChange={handleChange} value={inputMovie.image_url} name="image_url" type="text" required />
                <br />
                <label>Tahun Rilis</label> <br />
                <input onChange={handleChange} value={inputMovie.year} name="year" type="number" required />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}

export default MovieForm
