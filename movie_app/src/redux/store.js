import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slice/movieSlice';
import movieDetails from './slice/movieDetailSlice';
import searchResult from './slice/searchMovieSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    movie: movieDetails,
    search: searchResult,
  },
});

export default store;
