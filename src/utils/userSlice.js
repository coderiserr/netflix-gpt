import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
          return action.payload;
        },
        remove:(state,action)=>{
          return null;
        },
        
    }
})

export const{addUser,remove}=userSlice.actions
export default userSlice.reducer;