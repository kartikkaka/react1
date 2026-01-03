import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./reducers/MovieReducer";
import SelectedMovireducer from "./reducers/SelectedMovireducer";

export const store = configureStore({
    reducer: {
        movies: MovieReducer,
        SelectedMovie: SelectedMovireducer,
    }
})