import { createSlice } from "@reduxjs/toolkit";

const SelectedMovieSlice = createSlice({
    name: "selectedMovie",
    initialState: null,
    reducers: {
        setSelectedMovie: (state, action) => action.payload,
        clearSelectedMovie: () => null,
    },
});

export const { setSelectedMovie, clearSelectedMovie } = SelectedMovieSlice.actions;

export default SelectedMovieSlice.reducer;