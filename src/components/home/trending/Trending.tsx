import { useSelector } from "react-redux";
import MoviePoster from "../../moviePoster/MoviePoster";
import { Movie, selectAllMovies } from "../../../redux/MovieSlice";

export default function Trending() {
  const movies: Movie[] = useSelector(selectAllMovies);

  return (
    <>
      <div className="col-span-12 sm:col-span-8 md:ms-5">
        <h1 className="mb-[11px] mt-[48px] ml-[20px] text-[20px] font-bold">
          Trending
        </h1>
        <div className="grid grid-cols-12 gap-4 ml-[20px] ">
          {movies.slice(0, 8).map((movie) => (
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
    </>
  );
}
