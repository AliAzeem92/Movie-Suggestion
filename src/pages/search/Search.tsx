import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MoviePoster from "../../components/posters/moviePoster/MoviePoster";
import {
  searchMovies,
  selectAllSearch,
  selectIsLoading,
} from "../../redux/slice/searchSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";

const Search = () => {
  const dispatch: ThunkDispatch<RootState, any, any> = useDispatch();
  const searches = useSelector(selectAllSearch) || [];
  const isLoading = useSelector(selectIsLoading);
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query)).catch((error: any) => {
        console.error("Error in searchMovies dispatch:", error);
      });
    }
  }, [dispatch, query]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQuery = searchParams.get("query") || "";
    setQuery(newQuery);
  }, [location.search]);

  return (
    <div className="bg-[#EBEAEA]">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto p-4 ">
          <div className="grid grid-cols-1 w-full mt-[45px] mb-[34px] ">
            <h1 className="font-bold">
              Search Results For: <span className="text-2xl">{query}</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-[20px] ">
            {searches.length > 0 ? (
              searches.map((search) => (
                <div key={search.id} className="col-span-1 md:col-span-1">
                  <MoviePoster
                    imageUrl={search.poster_path}
                    movieId={search.id}
                    rating={search.vote_average}
                  />
                </div>
              ))
            ) : query ? (
              <div className="col-span-full text-center text-xl font-semibold">
                No movies found for "{query}".
              </div>
            ) : (
              <div className="col-span-full text-center text-xl font-semibold">
                Enter a search query.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
