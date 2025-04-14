import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice({
    name:"config",
    initialState:{
        language:"en",
    },
    reducers:{
        addlangData:(state,action)=>{
          state.language=action.payload
        }

        
    }

})
export default configSlice.reducer;
export const {addlangData}=configSlice.actions;