import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "../../../components/posters/moviePoster/MoviePoster";
import { fetchMovies, selectAllMovies } from "../../../redux/slice/movieSlice";
import { Movie } from "../../../types/types";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function Trending() {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const movies: Movie[] = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="col-span-12 sm:col-span-8 md:ms-5">
      <h1 className="mb-[11px] mt-[40px] ml-[20px] text-[20px] font-bold">
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
  );
}
