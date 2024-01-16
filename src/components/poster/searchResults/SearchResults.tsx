import SingleTrendingPoster from "../singleTreningPoster/SingleTrendingPoster";

function SearchResults() {
  return (
    <div>
      <div className="flex ml-[80px] mr-[80px] mb-[20px] ">
        <div className="mr-[20px] ">
          <SingleTrendingPoster />
        </div>
        <div className="mr-[19px] ">
          <SingleTrendingPoster />
        </div>
        <div className="mr-[20px] ">
          <SingleTrendingPoster />
        </div>
        <div className="mr-[20px] ">
          <SingleTrendingPoster />
        </div>
        <div className="mr-[19px] ">
          <SingleTrendingPoster />
        </div>
        <div>
          <SingleTrendingPoster />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
