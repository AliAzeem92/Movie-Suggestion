import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../utils/Instance";

export interface Movie {
  id: number;
  vote_average: number;
  poster_path: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

interface MovieState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await instance.get("trending/movie/day?language=en-US");
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movies. Please try again later.");
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  } as MovieState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error occurred.";
      });
  },
});

export const selectAllMovies = (state: { movies: MovieState }) =>
  state.movies.movies;

export const selectIsLoading = (state: { movies: MovieState }) =>
  state.movies.status === "loading";

export const { reducer: moviesReducer } = moviesSlice;

export default moviesSlice;
