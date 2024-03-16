import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "../../../components/posters/moviePoster/MoviePoster";
import { fetchMovies, selectAllMovies } from "../../../redux/slice/movieSlice";
import { Movie } from "../../../types/types";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { RootState } from "../../../redux/store";

export default function PopularMovies() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const movies: Movie[] = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="col-span-12 sm:col-span-4 md:me-5">
      <h1 className="mb-[11px] mt-[37px] text-[20px] font-bold">
        Popular Movies
      </h1>
      <div className="grid grid-cols-2 gap-4 ">
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
  );
}
