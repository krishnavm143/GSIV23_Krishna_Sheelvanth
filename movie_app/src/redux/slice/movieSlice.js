import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { APIKEY, BASEURL } from '../../config/config'

const initialState={
    movies:[],
    status:'idle',
    error:null
}

export const fetchMoviesAsync=createAsyncThunk(`movies/fetchMovies`,async()=>{
    const response =await axios.get(`${BASEURL}/discover/movie?api_key=${APIKEY}`)
    return response.data
})

const movieSlice=createSlice({
    name:'movies',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMoviesAsync.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchMoviesAsync.fulfilled,(state,action)=>{
            state.status="idle"
            state.movies=action.payload
        })
        builder.addCase(fetchMoviesAsync.rejected,(state)=>{
            state.status='error'
        })
    }
})

export default  movieSlice.reducer