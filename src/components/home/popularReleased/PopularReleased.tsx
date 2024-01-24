import { useSelector } from "react-redux";
import MoviePoster from "../../moviePoster/MoviePoster";
import { Movie, selectAllMovies } from "../../../redux/MovieSlice";

export default function PopularReleased() {
  const movies: Movie[] = useSelector(selectAllMovies);

  return (
    <>
      <div className="container mx-auto mb-4 pt-4">
        <h1 className="mb-[11px] mt-[48px] ml-[20px] text-[20px] font-bold">
          Popular Released
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ml-[20px] mb-[85px] ">
          {movies.slice(0, 12).map((movie) => (
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
