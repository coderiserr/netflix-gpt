import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSeach:false,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSeach=!state.showGptSeach
        }
    }
    

})

export default gptSlice.reducer
export const {toggleGptSearch}=gptSlice.actions;