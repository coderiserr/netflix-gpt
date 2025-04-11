import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch=useDispatch()
    const nowPlayingmovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTION
      );
      const json = await data.json();
  
       dispatch(addNowPlaying(json.results));
      
    };
    useEffect(() => {
      nowPlayingmovies();
    }, []);
}
export default useNowPlayingMovies;