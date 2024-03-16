import { useState, useEffect } from "react";
import MovieDetail from "../../components/movie/movieDetail/MovieDetail";
import Seasons from "../../components/movie/seasons/Seasons";
import Loader from "../../components/loader/Loader";

export default function Movie() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-[#EBEAEA]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieDetail />
          <Seasons />
        </>
      )}
    </div>
  );
}
