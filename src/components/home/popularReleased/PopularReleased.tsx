import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "../../../components/posters/moviePoster/MoviePoster";
import {
  Movie,
  fetchMovies,
  selectAllMovies,
  selectIsLoading,
} from "../../../redux/slice/MovieSlice";
import { searchMovies } from "../../../redux/slice/SearchSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { RootState } from "../../../redux/Store";

export default function PopularReleased() {
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
  );
}
