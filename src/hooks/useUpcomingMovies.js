import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";

const useUpcomingMovies=  ()=>{

    const dispatch=useDispatch()
    const getupcomingMovies= async()=>{
         const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTION);
    const json= await data.json();

    dispatch(addUpcomingMovies(json.results));
    }
   
useEffect(()=>{
    getupcomingMovies();
},[])

}
export default useUpcomingMovies;