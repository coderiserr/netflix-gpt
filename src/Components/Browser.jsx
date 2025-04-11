
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { addPopularPlaying } from "../utils/movieSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";



const Browser = () => {
   
useNowPlayingMovies()
addPopularPlaying()
  return (
    <>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
   
        
    
    </>
  );
};
export default Browser;
