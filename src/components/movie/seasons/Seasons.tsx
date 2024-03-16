import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SeasonPoster from "../../../components/posters/seasonPoster/SeasonPoster";
import {
  fetchSeries,
  selectAllSeasons,
} from "../../../redux/slice/seasonsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { Season } from "../../../types/types";

export default function Seasons() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const seasons: Season[] = useSelector(selectAllSeasons);

  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-96 md:my-2 mx-auto py-4">
        <div className="grid grid-cols-2 gap-4 mb-[30px] ">
          <div className="flex flex-row gap-4">
            <h1 className="font-bold text-4xl leading-9 ">Seasons</h1>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              1
            </span>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              2
            </span>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              3
            </span>
            <span className="cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              4
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 ">
          {seasons.slice(0, 20).map((season) => (
            <div key={season.id}>
              <SeasonPoster
                imageUrl={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                movieId={season.id}
                rating={season.vote_average}
                name={season.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
