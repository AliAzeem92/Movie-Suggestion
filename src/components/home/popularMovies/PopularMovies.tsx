import { useSelector } from "react-redux";
import MoviePoster from "../../moviePoster/MoviePoster";
import { Movie, selectAllMovies } from "../../../redux/MovieSlice";

export default function Home() {
  const movies: Movie[] = useSelector(selectAllMovies);

  return (
    <>
      <div className="col-span-12 sm:col-span-4 md:me-5">
        <h1 className="mb-[11px] mt-[37px] ml-[20px] text-[20px] font-bold">
          Popular Movies
        </h1>
        <div className="grid grid-cols-2 gap-4 ml-[20px] ">
          {movies.slice(8, 12).map((movie) => (
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
    </>
  );
}
