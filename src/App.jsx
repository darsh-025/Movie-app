import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";  // this is for route select, below is the path provided
import Login from './pages/Login'; // login page
import Movix from './pages/Movix'; // normal page
import Signup from './pages/Signup'; // signup page
import Player from './pages/Player'; //player page
import Movies from "./pages/Movies"; // movies page
import TVShows from "./pages/TVShows"; //tvshow page
import UserLiked from './pages/UserLiked'; // userliked page

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<Login/>} />  
            <Route exact path="/signup" element={<Signup/>} />   
            <Route exact path="/player" element={<Player/>}/>
            <Route exact path="/movies" element={<Movies/>}/>
            <Route exact path="/tv" element={<TVShows/>}/>
            <Route exact path="/mylist" element={<UserLiked/>}/>
            <Route exact path="/" element={<Movix/>} />  
        </Routes>
    </BrowserRouter>
  );
}

// There are total 7 routes/paths provided above (normal page, login, signup, player, movies, tv, mylist )