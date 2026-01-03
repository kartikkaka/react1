import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:[],
    reducers:{
        initializeMovies:(state, action) =>{
            return action.payload;
        },
    },
});

export const { initializeMovies} = movieSlice.actions;
export default movieSlice.reducer;