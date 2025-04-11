import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlayingState:null,
        videotrailer:null,
        nowPopularPlaying:null,
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
        }
    }
})
export const {addNowPlaying,addtrailer ,addPopularPlaying}=movieSlice.actions;
export default movieSlice.reducer;