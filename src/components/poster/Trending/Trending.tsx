import SinglePoster from "../singlePoster/SinglePoster";

function Trending() {
  return (
    <div>
      <h1 className="ml-[166px] mt-[41px] mb-[23px] font-Roboto text-[20px] w-[500] ">
        Popular Movies
      </h1>
      <div className="flex ml-[166px] ">
        <div className="mr-[22px] ">
          <SinglePoster />
        </div>
        <div className="mr-[22px] ">
          <SinglePoster />
        </div>
        <div className="mr-[22px] ">
          <SinglePoster />
        </div>
        <div className="mr-[22px] ">
          <SinglePoster />
        </div>
      </div>
    </div>
  );
}

export default Trending;
