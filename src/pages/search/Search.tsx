import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "../../components/posters/moviePoster/MoviePoster";
import { useLocation } from "react-router-dom";
import {
  Searchs,
  searchMovies,
  selectAllSearch,
  selectIsLoading,
} from "../../redux/slice/SearchSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/Store";

const Search = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const searches = useSelector(selectAllSearch) || [];
  const [searchQuery, setSearchQuery] = useState("");
  const isLoading = useSelector(selectIsLoading);
  const [query, setQuery] = useState("");

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQuery = searchParams.get("query") || "";
    setQuery(newQuery);
  }, [location.search]);
  useEffect(() => {
    let isMounted = true;
    if (query) {
      dispatch(searchMovies(query))
        .then((data) => {
          if (isMounted) {
            dispatch(searchMoviesFulfilled(data));
          }
        })
        .catch((error) => {
          console.error("Error in searchMovies dispatch:", error);
        });
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, query]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setQuery(query);
    dispatch(searchMovies(query))
      .then((data) => {
        dispatch(searchMoviesFulfilled(data));
      })
      .catch((error) => {
        console.error("Error in searchMovies dispatch:", error);
      });
  };
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 w-full mt-[45px] mb-[34px] ">
          <h1 className="font-bold">
            Search Results For: <span className="text-2xl">{query}</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-[20px] ">
          {searches.length > 0 ? (
            searches.map((search: Searchs) => (
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
    </>
  );
};

export default Search;
function searchMoviesFulfilled(
  data:
    | import("@reduxjs/toolkit").PayloadAction<
        any,
        string,
        { arg: string; requestId: string; requestStatus: "fulfilled" },
        never
      >
    | import("@reduxjs/toolkit").PayloadAction<
        unknown,
        string,
        {
          arg: string;
          requestId: string;
          requestStatus: "rejected";
          aborted: boolean;
          condition: boolean;
        } & ({ rejectedWithValue: true } | ({ rejectedWithValue: false } & {})),
        import("@reduxjs/toolkit").SerializedError
      >
): any {
  throw new Error("Function not implemented.");
}
