import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlayingState:null,
        videotrailer:null,
        nowPopularPlaying:null,
        topRatedmvoies:null,
        upcomingMvoies:null,
    },
    reducers:{
        addNowPlaying:(state,action)=>{
           state.nowPlayingState=action.payload;
        },
        addtrailer:(state,action)=>{
        state.videotrailer=action.payload;
        },
        addPopularPlaying:(state,action)=>{
      state.nowPopularPlaying=action.payload
        },
        addTopRatedMovies:(state,action)=>{
      state.topRatedmvoies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
     state.upcomingMvoies=action.payload
        }
    }
})
export const {addNowPlaying,addtrailer ,addPopularPlaying,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;