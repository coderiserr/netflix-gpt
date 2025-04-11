import React from "react";
import Card from "./Card";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll rounded-sm">
        
          <div className="flex  ">
            {movies?.map((movie)=>(
                <Card key={movie.id} posterPath={movie.poster_path}/>
            ))}
        
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
