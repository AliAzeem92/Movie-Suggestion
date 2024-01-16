import React from "react";
import SinglePoster from "../singlePoster/SinglePoster";

export function PopulerMovies() {
  return (
    <div>
      <h1 className="ml-[80px] mt-[41px] mb-[23px] font-Roboto text-[20px] w-[500] ">
        Popular Movies
      </h1>
      <div className="flex ">
        <div className="mr-[22px] ml-[80px] ">
          <SinglePoster />
        </div>
        <div>
          <SinglePoster />
        </div>
      </div>
    </div>
  );
}

export default PopulerMovies;
