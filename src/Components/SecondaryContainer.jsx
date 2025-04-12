import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
    const movies= useSelector(store => store.movie)

  return ( 
     movies.nowPlayingState  &&(
    
    <div className="bg-black pb-5 ">
        <div className=" mt-0 md:-mt-96 pl-4 md:pl-12 relative z-20 ">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingState}/>
    <MovieList title={"Top Rated"} movies={movies.topRatedmvoies}/>
    <MovieList title={"Popular"} movies={movies.nowPopularPlaying}/>
    <MovieList title={"Upcoming"} movies={movies.upcomingMvoies}/>
    </div>
    </div>
     )
  )
  
}
