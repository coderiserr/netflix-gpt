import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addPopularPlaying } from "../utils/movieSlice";

const usePopularMovies= ()=>{
    const dispatch=useDispatch()
    const nowPopularmovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTION
      );
      const json = await data.json();
  
       dispatch(addPopularPlaying(json.results));
      
    };
    useEffect(() => {
      nowPopularmovies();
    }, []);
}