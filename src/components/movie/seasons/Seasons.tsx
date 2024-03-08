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
            <h1 className="ml-[20px] font-bold text-4xl leading-9 ">Seasons</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 ml-[20px] ">
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
