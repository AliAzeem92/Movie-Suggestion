import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../assets/icons/icon _bookmark_.png";
import { useParams } from "react-router-dom";
import {
  fetchMovies,
  selectAllMovies,
  selectIsLoading,
} from "../../../redux/slice/MovieSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/Store";

export default function Detail() {
  const { movieId } = useParams();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const movies: Movie[] = useSelector(selectAllMovies);
  const [movieData, setMovieData] = React.useState<Movie | null>(null);

  interface Movie {
    id: number;
    vote_average: number;
    poster_path: string;
    name: string;
    original_title: string;
    backdrop_path: string;
    overview: string;
  }

  React.useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  React.useEffect(() => {
    const matchedMovie = movies.find(
      (movie) => movie.id.toString() === movieId
    );

    if (matchedMovie) {
      setMovieData(matchedMovie);
    }
  }, [movies, movieId]);

  if (movieData === null) {
    return <div>Id Data Not Found</div>;
  }

  return (
    <>
      <div className="container p-4 ">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          {movieData ? (
            <div className="col-span sm:w-full">
              <p className="font-bold text-4xl mt-[43px] ">
                {" "}
                {movieData.original_title}
              </p>
            </div>
          ) : (
            <div className="col-span font-bold text-4xl leading-9 sm:w-full">
              Movie not found
            </div>
          )}

          <div className="col-span flex flex-row justify-end p-2 sm:flex hidden ">
            <button
              className="bg-[#D9D9D9] hover:bg-[#D2D2D2] flex flex-row rounded-full p-4 cursor-pointer text-black "
              disabled={isLoading}
            >
              <img
                src={Icon}
                alt="Add to watchlist"
                className="md:mx-2 sm:mx-1"
              />
              <span>Add to watchlist</span>
            </button>
          </div>
        </div>
        {/* description */}
        <div className="container mx-auto py-4">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 flex flex-col ">
            <div className="grid md:grid-cols-2 sm:grid-cols-1  z-10 md:static absolute gap-5">
              <div className="md-[37px] sm:w-full w-[100px] flex justify-center relative md:top-0 mt-[8px] ml-[30px] top-16 ">
                <img
                  className="sm:w-[98px] sm:h-[146px] lg:w-[196px] lg:h-[291px] md:w-full lg:w-[196px]  rounded-[20px]"
                  src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
                  alt="Movie Poster"
                />
              </div>

              <div className=" w-[500] my-5 relative md:top-0 md:left-0 top-16 left-1">
                <span className="rounded-full border-2 border-black border-solid px-3 py-1 me-2 ">
                  Action
                </span>
                <span className="rounded-full border-2 border-black border-solid px-3 py-1 ms-2">
                  Sci Fiction
                </span>
                <p className="color-black font-bold text-l mt-4 mb-10">
                  {movieData.overview.slice(0, 300)}
                </p>
                <h3>IMDB Rating</h3>
                <span className="text-xl">
                  ⭐{Math.round(movieData.vote_average)}
                </span>{" "}
                <span>/10</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:static relative ">
              <div className="mx-4 ">
                <img
                  className="sm:w-[98px] sm:h-[146px] lg:w-[521px] lg:h-[291px] md:w-full rounded-[20px]"
                  src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Icon from "../../../assets/icons/icon _bookmark_.png";
// import { useParams } from "react-router-dom";
// import {
//   fetchMovies,
//   selectAllMovies,
//   selectIsLoading,
// } from "../../../redux/slice/MovieSlice";
// import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
// import { RootState } from "../../../redux/Store";

// export default function Detail() {
//   const { movieId } = useParams();
//   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const movies: Movie[] = useSelector(selectAllMovies);
//   const [movieData, setMovieData] = React.useState<Movie | null>(null);

//   interface Movie {
//     id: number;
//     vote_average: number;
//     poster_path: string;
//     name: string;
//     original_title: string;
//     backdrop_path: string;
//     overview: string;
//   }

//   React.useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

//   React.useEffect(() => {
//     const matchedMovie = movies.find(
//       (movie) => movie.id.toString() === movieId
//     );

//     if (matchedMovie) {
//       setMovieData(matchedMovie);
//     }
//   }, [movies, movieId]);

//   if (movieData === null) {
//     return <div>Id Data Not Found</div>;
//   }

//   return (
//     <>
//       <div className="container p-4">
//         <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
//           {movieData ? (
//             <div className="col-span">
//               <p className="font-bold text-4xl mt-5">{movieData.original_title}</p>
//             </div>
//           ) : (
//             <div className="col-span font-bold text-4xl leading-9">
//               Movie not found
//             </div>
//           )}

//           <div className="col-span flex justify-end p-2 sm:flex hidden">
//             <button
//               className="bg-gray-300 hover:bg-gray-400 flex rounded-full p-4 cursor-pointer text-black"
//               disabled={isLoading}
//             >
//               <img src={Icon} alt="Add to watchlist" className="mx-2" />
//               <span>Add to watchlist</span>
//             </button>
//           </div>
//         </div>
//         {/* description */}
//         <div className="container mx-auto py-4">
//           <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 flex flex-col justify-between">
//             <div className="grid md:grid-cols-2 sm:grid-cols-1 z-10 md:static absolute gap-5">
//               <div className="sm:w-[98px] sm:h-[146px] lg:w-[196px] lg:h-[291px] md:w-full lg:w-[196px]  rounded-[20px]">
//                 <img
//                   className="rounded-lg"
//                   src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
//                   alt="Movie Poster"
//                 />
//               </div>

//               <div>
//                 <span className="rounded-full border-2 border-black border-solid px-3 py-1 me-2">Action</span>
//                 <span className="rounded-full border-2 border-black border-solid px-3 py-1 ms-2">Sci Fiction</span>
//                 <p className="color-black font-bold text-l mt-4 mb-10">{movieData.overview.slice(0, 300)}</p>
//                 <h3>IMDB Rating</h3>
//                 <span className="text-xl">⭐{Math.round(movieData.vote_average)}</span>
//                 <span>/10</span>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:static relative">
//               <div className="mx-4">
//                 <img
//                   className="rounded-lg"
//                   src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
//                   alt="Movie Scene"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
