import { useState } from "react";
import { useDispatch } from "react-redux";
import PopularMovies from "../../components/home/popularMovies/PopularMovies";
import Trending from "../../components/home/trending/Trending";
import PopularReleased from "../../components/home/popularReleased/PopularReleased";

import { searchMovies } from "../../redux/SearchSlice";
import Navbar from "../../components/navbar/Navbar";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { RootState } from "../../redux/Store";

export default function Home() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    dispatch(searchMovies(query));
  };

  return (
    <>
      <Navbar
        searchPlaceholder={"🔍 Search Movie Or Series"}
        onSearchChange={handleSearchChange}
        showSearchButton={true}
        showPlusButton={true}
      />

      <div className="container mx-auto flex flex-col ">
        <div className="grid grid-cols-12 gap-4">
          <PopularMovies />
          <Trending />
        </div>
      </div>
      <PopularReleased />
    </>
  );
}
