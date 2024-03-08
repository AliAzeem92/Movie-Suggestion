import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Movie from "./pages/movies/Movie";
import { useDispatch } from "react-redux";
import { searchMovies } from "./redux/slice/searchSlice";
import Navbar from "./components/navbar/Navbar";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { RootState } from "./redux/store";

function App() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const handleSearchChange = (query: string) => {
    dispatch(searchMovies(query));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
