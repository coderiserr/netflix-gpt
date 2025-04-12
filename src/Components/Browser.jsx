
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchMian from "./GptSearchMian";

import Header from "./Header";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";



const Browser = () => {
  const showGptSearch= useSelector(store => store.gpt.showGptSeach)
   
useNowPlayingMovies()
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearchMian/>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
     
   
        
    
    </>
  );
};
export default Browser;
