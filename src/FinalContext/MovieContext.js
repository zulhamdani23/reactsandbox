import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useHistory } from "react-router"
import Cookies from 'js-cookie'

export const MovieContext = createContext()

export const MovieProvider = props => {
    const history = useHistory()
    const [fetchStatus, setFetchStatus] = useState(true)
    const [movieList, setMovieList] = useState([])
    const [ searchData , setSearchData ] = useState([])
    const [movieId, setMovieId] = useState(-1)
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
                review: e.review,
            }
            })
            setMovieList(outputMovie)
        }

    const editMovie = (idMovie) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
        .then (res => {
            let data = res.data
            setInputMovie(
                {
                    title : data.title,
                    description: data.description,
                    genre: data.genre,
                    rating: data.rating,
                    image_url: data.image_url,
                    duration: data.duration,
                    year: data.year,
                    review: data.review,
                }
                )
            setMovieId(data.id)
        })
    }    
    const deleteMovie = (idMovie) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`, {headers: {"Authorization" : "Bearer "+ Cookies.get("token")}} )
            .then (() => {
                let newMovieList = movieList.filter((m) => {return m.id !== idMovie })
                setMovieList(newMovieList)
                setFetchStatus(true)
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
        }, {headers: {"Authorization" : "Bearer "+ Cookies.get("token")}} )
          .then(res => {
            setFetchStatus(true)
            history.push("/movie-list/")
        }).catch((e) => {
            alert(e.response.data.message)
        })
    }

    const updateMovie = () => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${movieId}`, {
            title : inputMovie.title,
            description: inputMovie.description,
            genre: inputMovie.genre,
            rating: inputMovie.rating,
            image_url: inputMovie.image_url,
            duration: inputMovie.duration,
            year: inputMovie.year,
            review: inputMovie.review
            }, {headers: {"Authorization" : "Bearer "+ Cookies.get("token")}} )
            .then((e) => {
                setFetchStatus(true)
                history.push("/movie-list/")
            })
        }
    const functions = {
            fetchMovie,
            deleteMovie,
            submitMovie,
            updateMovie,
            editMovie,
           
        }
        
    return (
        <MovieContext.Provider value={{
            movieList,
            setMovieList,
            inputMovie,
            setInputMovie,
            movieId,
            setMovieId,
            fetchStatus, 
            setFetchStatus,
            functions
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}