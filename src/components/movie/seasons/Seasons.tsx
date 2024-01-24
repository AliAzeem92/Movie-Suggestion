import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../assets/icons/icon _bookmark_.png";
import SeasonPoster from "../../../components/seasonPoster/SeasonPoster";
import { useParams } from "react-router-dom";
import {
  fetchMovies,
  selectAllMovies,
  selectIsLoading,
} from "../../../redux/MovieSlice";
import { fetchSeries, selectAllSeasons } from "../../../redux/SeasonsSlice";
import { selectAllSearch } from "../../../redux/SearchSlice";
import Navbar from "../../../components/navbar/Navbar";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/Store";

export default function Seasons() {
  const { movieId } = useParams();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const movies: Movie[] = useSelector(selectAllMovies);
  const seasons: Season[] = useSelector(selectAllSeasons);
  const searchs: Search[] = useSelector(selectAllSearch);
  const [movieData, setMovieData] = useState<Movie | Season | Search | null>(
    null
  );
  interface Movie {
    id: number;
    vote_average: number;
    poster_path: string;
    name: string;
    original_title: string;
    backdrop_path: string;
    overview: string;
  }

  interface Season {
    id: number;
    vote_average: number;
    poster_path: string;
    name: string;
    original_title: string;
    backdrop_path: string;
    overview: string;
  }

  interface Search {
    id: number;
    vote_average: number;
    poster_path: string;
    name: string;
    original_title: string;
    backdrop_path: string;
    overview: string;
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  useEffect(() => {
    const matchedMovie = movies.find(
      (movie) => movie.id.toString() === movieId
    );
    const matchedSeries = seasons.find(
      (seasons) => seasons.id.toString() === movieId
    );
    const matchedSearch = searchs.find(
      (search) => search.id.toString() === movieId
    );

    if (matchedMovie) {
      setMovieData(matchedMovie);
    }
    if (matchedSeries) {
      setMovieData(matchedSeries);
    }
    if (matchedSearch) {
      setMovieData(matchedSearch);
    }
  }, [movies, seasons, , searchs, movieId]);
  if (movieData === null) {
    return <div>Id Data Not Found</div>;
  }

  return (
    <>
      <div className="container mt-96  md:my-2  mx-auto py-4">
        <div className="grid grid-cols-2 gap-4 mb-[30px] ">
          <div className="flex flex-row gap-4">
            <h1 className="ml-[20px] font-bold text-4xl leading-9 ">Seasons</h1>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] p-2  bg-[#D9D9D9] text-black">
              1
            </span>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] p-2  bg-[#D9D9D9] text-black">
              2
            </span>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] p-2  bg-[#D9D9D9] text-black">
              3
            </span>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] p-2  bg-[#D9D9D9] text-black">
              4
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 ml-[20px] ">
          {seasons.slice(0, 18).map((season) => (
            <div key={season.id}>
              <SeasonPoster
                imageUrl={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                movieId={season.id}
                rating={season.vote_average}
                name={season.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
