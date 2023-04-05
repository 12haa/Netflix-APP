import React, { useState, useEffect } from "react";
import request from "./Requests";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(request.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);
  const truncateString = (str , num) => {
      if(str.length > num)  {
          return str.slice(0, num ) + ". . . "
      }else {
          return str
      }
  }
  

  return (
    <div className="w-full h-[630px] text-white  ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[630px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-fit "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>

          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2  px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2  px-5 ml-4 ">
              Watch Later
            </button>
          </div>
          <p className="text-grey-400 text-sm font-semibold">
            Released {movie?.release_date} :
          </p>
          <p className="w-[50%] md:max-2-[70%]  lg:max-2-[50%] xl:max-2-[35%]  ">
            IMDB Rating : {movie?.vote_average} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

// how to define a object in javascript?
