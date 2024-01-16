import Trending from "./Trending/Trending";
import PopularReleases from "./popularReleases/PopularReleases";
import PopulerMovies from "./populerMovies/PopulerMovies";
// import Trending from "./trending/Trending";

export function Poster() {
  return (
    <div>
      <div className="flex">
        <div>
          <PopulerMovies />
        </div>
        <div>
          <Trending />
        </div>
      </div>
      <div className="flex">
        <div>
          <PopularReleases />
        </div>
      </div>
    </div>
  );
}

export default Poster;
