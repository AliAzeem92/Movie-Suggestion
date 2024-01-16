import SinglePoster from "../singlePoster/SinglePoster";

function PopularReleases() {
  return (
    <div>
      <h1 className="ml-[80px] mt-[41px] mb-[23px] font-Roboto text-[20px] w-[500] ">
        Popular Releases
      </h1>
      <div className="flex ml-[80px] mb-[85px] ">
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

export default PopularReleases;
