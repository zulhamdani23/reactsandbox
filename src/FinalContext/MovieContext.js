import axios from 'axios'
import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {
    const [movieList, setMovieList] = useState([])
    const [inputMovie, setInputMovie] = useState({
        title:'',
        description:'',
        genre:'',
        rating:'',
        image_url:'',
        duration:'',
        year:'',
        review: '' 
    })
    const [movieId, setMovieId] = useState(-1)

    const fetchMovie = async () => {
        let daftarMovie = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        let dataMovie = daftarMovie.data
        let outputMovie = dataMovie.map ((e) => {
            return {
                id : e.id, 
                title : e.title,
                description: e.description,
                genre: e.genre,
                rating: e.rating,
                image_url: e.image_url,
                duration: e.duration,
                year: e.year,
                review: e.review
            }
            })
            setMovieList(outputMovie)
        }

    const editMovie = (idMovie) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
        .then (res => {
            let data = res.data
            setInputMovie(data.name)
            setMovieId(data.id)
        })
    }    
    const deleteMovie = (idMovie) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
            .then (() => {
                let newMovieList = movieList.filter((m) => {return m.id !== idMovie })
                setMovieList(newMovieList)
            })
        
    }    

    const submitMovie = (params) => {
        axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
            title : inputMovie.title,
            description: inputMovie.description,
            genre: inputMovie.genre,
            rating: inputMovie.rating,
            image_url: inputMovie.image_url,
            duration: inputMovie.duration,
            year: inputMovie.year,
            review: inputMovie.review
        })
          .then(res => {
              let data = res.data
              setMovieList([...movieList, {
                  id: data.id,
                  title: data.title, 
                  description: data.description,
                  genre: data.genre,
                  rating: data.rating,
                  image_url: data.image_url,
                  duration: data.duration,
                  year: data.year,
                  review: data.review
                }])
          })
    }

    const updateMovie = (params) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${movieId}`, {
            title : inputMovie.title,
            description: inputMovie.description,
            genre: inputMovie.genre,
            rating: inputMovie.rating,
            image_url: inputMovie.image_url,
            duration: inputMovie.duration,
            year: inputMovie.year,
            review: inputMovie.review
            })
          .then(() => {
              let dataBaruMovie = movieList.find(el=> el.id === movieId)
              dataBaruMovie.title= inputMovie.title
              dataBaruMovie.description= inputMovie.description
              dataBaruMovie.genre= inputMovie.genre
              dataBaruMovie.rating= inputMovie.rating
              dataBaruMovie.image_url= inputMovie.image_url
              dataBaruMovie.duration= inputMovie.duration
              dataBaruMovie.year= inputMovie.year
              dataBaruMovie.review= inputMovie.review
              setMovieList([...movieList])
          })      
    }
    const functions = {
            fetchMovie,
            deleteMovie,
            submitMovie,
            updateMovie,
            editMovie
        }
        
    return (
        <MovieProvider value={{
            movieList,
            setMovieList,
            inputMovie,
            setInputMovie,
            movieId,
            setMovieId,
            functions
        }}>
            {props.children}
        </MovieProvider>
    )
}