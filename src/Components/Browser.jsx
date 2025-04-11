
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";


const Browser = () => {
   
useNowPlayingMovies()
  return (
    <>
      <Header />
      <MainContainer/>
      <SecondContainer/>
        
    
    </>
  );
};
export default Browser;
