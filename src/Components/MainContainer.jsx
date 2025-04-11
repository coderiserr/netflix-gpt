import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies= useSelector(store => store.movie?.nowPlayingState)
    if(movies === null )return;
 
    const mainMovie=movies[0];
    const {original_title,overview, id}=mainMovie;
    console.log(mainMovie)
   

   
  return (
    <> 
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackGround  movieId={id}/>
    
 
    </>
   
  )
}

export default MainContainer