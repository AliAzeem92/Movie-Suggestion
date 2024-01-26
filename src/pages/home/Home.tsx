import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "../../components/posters/moviePoster/MoviePoster";
import {
  Movie,
  fetchMovies,
  selectAllMovies,
  selectIsLoading,
} from "../../redux/slice/MovieSlice";
import { searchMovies } from "../../redux/slice/SearchSlice";
import Navbar from "../../components/navbar/Navbar";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { RootState } from "../../redux/Store";

export default function Home() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const movies: Movie[] = useSelector(selectAllMovies);
  const isLoading = useSelector(selectIsLoading);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    dispatch(searchMovies(query));
  };

  return (
    <>
      <Navbar
        searchPlaceholder={"🔍 Search a movie or a series"}
        onSearchChange={handleSearchChange}
        showSearchButton={true}
        showPlusButton={true}
      />
      <div className="container mx-auto flex flex-col ">
        <div className="grid grid-cols-12 gap-4">
          {/* Popular Movies */}
          <div className="col-span-12 sm:col-span-4 md:me-5">
            <h1 className="mb-[11px] mt-[37px] ml-[20px] text-[20px] font-bold">
              Popular Movies
            </h1>
            <div className="grid grid-cols-2 gap-4 ml-[20px] ">
              {movies.slice(8, 10).map((movie) => (
                <div key={movie.id} className="md:col-span-1 sm:col-span-2">
                  <MoviePoster
                    imageUrl={movie.poster_path}
                    movieId={movie.id}
                    rating={Math.round(movie.vote_average)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Trending */}
          <div className="col-span-12 sm:col-span-8 md:ms-5">
            <h1 className="mb-[11px] mt-[48px] ml-[20px] text-[20px] font-bold">
              Trending
            </h1>
            <div className="grid grid-cols-12 gap-4 ml-[20px] ">
              {movies.slice(0, 4).map((movie) => (
                <div key={movie.id} className="col-span-6 sm:col-span-3">
                  <MoviePoster
                    imageUrl={movie.poster_path}
                    movieId={movie.id}
                    rating={Math.round(movie.vote_average)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Released */}
      <div className="container mx-auto mb-4 pt-4">
        <h1 className="mb-[11px] mt-[48px] ml-[20px] text-[20px] font-bold">
          Popular Released
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ml-[20px] mb-[85px] ">
          {movies.slice(0, 18).map((movie) => (
            <div key={movie.id} className="col-span-1 md:col-span-1">
              <MoviePoster
                imageUrl={movie.poster_path}
                movieId={movie.id}
                rating={Math.round(movie.vote_average)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
