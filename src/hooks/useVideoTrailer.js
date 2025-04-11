import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addtrailer } from "../utils/movieSlice";

const useVideoTrailer=({movieId})=>{
    const dispatch=useDispatch()
    const getMovieTriler = async () => {
      const data = await fetch(
        
        "https://api.themoviedb.org/3/movie/950387/videos?language=en-US",
        API_OPTION
      );
      const json = await data.json();
    
      const filterData = json.results.filter((video) => video.type === "Trailer");
    
  
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addtrailer(trailer))
     
    };
    useEffect(() => {
      getMovieTriler();
    }, []);
}
export default useVideoTrailer;