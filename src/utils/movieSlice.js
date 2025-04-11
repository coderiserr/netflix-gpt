import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlayingState:null,
        videotrailer:null,
    },
    reducers:{
        addNowPlaying:(state,action)=>{
           state.nowPlayingState=action.payload;
        },
        addtrailer:(state,action)=>{
        state.videotrailer=action.payload;
        }
    }
})
export const {addNowPlaying,addtrailer}=movieSlice.actions;
export default movieSlice.reducer;