import React from 'react';
import MovieList from "./Component/MovieList"
import MovieForm from "./Component/MovieForm"
import Movie from "./Component/Movie"
import Game from "./Component/Game"
import Navbar from './Component/Navbar'
import Routes from './Route/Routes'
import { UserProvider } from "./FinalContext/UserContext";

function App() {
  return (
  <>
  <UserProvider>
      <Routes/>
  </UserProvider>
  </>
  );
}

export default App;
