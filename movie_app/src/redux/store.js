import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";
import movieDetails from './slice/movieDetailSlice'

const store=configureStore({
    reducer:{
        movies:movieReducer,
        movie:movieDetails
    }
})

export default store