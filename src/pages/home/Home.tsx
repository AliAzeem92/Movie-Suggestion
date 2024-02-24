import React, { useState, useEffect } from 'react';
import PopularMovies from "../../components/home/popularMovies/PopularMovies";
import Trending from "../../components/home/trending/Trending";
import PopularReleases from "../../components/home/popularReleases/PopularReleases";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto flex flex-col ">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <PopularMovies />
          <Trending />
        </div>
      )}
      {loading ? null : <PopularReleases />}
    </div>
  );
}
