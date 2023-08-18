import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKEY, BASEURL } from "../../config/config";

const initialState={
    searchResults:[],
    status:'idle',
    error:null,
    searchQuery:''
}
export const searchMoviesAsync=createAsyncThunk('search/searchMovies',async(query)=>{
    const response=await axios.get(`${BASEURL}/search/movie?query=${query}&api_key=${APIKEY}`)
    return response.data.results    
})
const searchMovieSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearchQuery:(state,action)=>{
            state.searchQuery=action.payload
        },
        clearSearchQuery:(state)=>{
            state.searchQuery=''
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(searchMoviesAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(searchMoviesAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.searchResults = action.payload;
          })
          .addCase(searchMoviesAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
        }
})

export const {setSearchQuery,clearSearchQuery}=searchMovieSlice.actions

export default searchMovieSlice.reducer