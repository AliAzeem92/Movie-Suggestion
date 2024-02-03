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

export default function PopularMovies() {
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
    );
}
