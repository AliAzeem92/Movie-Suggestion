import react from 'react'
import PopularMovies from "../../components/home/popularMovies/PopularMovies";
import Trending from "../../components/home/trending/Trending";
import PopularReleased from "../../components/home/popularReleased/PopularReleased";

export default function Home() {

  return (
    <div className="container mx-auto flex flex-col ">
      <div className="grid grid-cols-12 gap-4">
        <PopularMovies />
        <Trending />
      </div>



      <PopularReleased />
    </div>
  );
}
