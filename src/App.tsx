import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Search from "./pages/search/Search";
import Movie from "./pages/movie/Movie";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
