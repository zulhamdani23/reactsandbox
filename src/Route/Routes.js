import React from "react"
import LayoutComponent from "../Layout/Layout"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Home from "../Component/Home"
import About from "../Component/About"
import { MovieProvider } from "../FinalContext/MovieContext"
import { GameProvider } from "../FinalContext/GameContext"
import MovieList from "../Component/MovieList"
import MovieForm from "../Component/MovieForm"
import Movie from '../Component/Movie'
import Game from '../Component/Game'
import GameList from '../Component/GameList'
import GameForm from '../Component/GameForm'
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import Cookies from "js-cookie"
import Dashboard from '../Component/Dashboard'
// import SearchSection from "../Component/SearchSection"

const Routes = () => {
  const LoginRoute = ({...props}) => {
    if(Cookies.get('token') !== undefined) {
      return <Redirect  to='/'/>
    } else {
      return  <Route {...props} />
    }
  }
  return (
    <>
   
      <Router>
      <MovieProvider>
    <GameProvider>
          <Switch>

            <Route path="/" exact>
              <LayoutComponent content={<Home />} />
            </Route>

            <Route path="/about" exact>
              <LayoutComponent content={<About />} />
            </Route>

            <Route path="/movie" exact>
              <LayoutComponent content={<Movie />} />
            </Route>

            <Route path="/game" exact>
              <LayoutComponent content={<Game/>}/>
            </Route>

            <Route path="/movie-edit/:id" exact>
              <LayoutComponent content={<MovieForm/>}/>
            </Route>
            
            <Route path="/game-edit/:id" exact>
              <LayoutComponent content={<GameForm/>}/>
            </Route>

            <Route path="/movie-add/" exact>
              <LayoutComponent content={<MovieForm/>}/>
            </Route>
            
            <Route path="/game-add/" exact>
              <LayoutComponent content={<GameForm/>}/>
            </Route>

            <Route path="/movie-list/" exact>
              <LayoutComponent content={<MovieList/>}/>
            </Route>

            <Route path="/game-list/" exact>
              <LayoutComponent content={<GameList/>}/>
            </Route>

            <Route path="/dashboard/" exact>
              <LayoutComponent content={<Dashboard/>}/>
            </Route>

            <LoginRoute path="/login" exact>
              <LayoutComponent content={<Login />}/>
            </LoginRoute>
            <LoginRoute path="/register" exact>
              <LayoutComponent content={<Register />}/>
            </LoginRoute>

          </Switch>
          </GameProvider>
      </MovieProvider>
      </Router>
      
    </>
  )

}

export default Routes