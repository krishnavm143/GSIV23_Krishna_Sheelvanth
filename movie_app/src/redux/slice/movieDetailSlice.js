import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKEY, BASEURL, PARTURL } from "../../config/config";

const initialState={
    movie:{},
    status:'idle',
    error:null,
}
export const fetchParticularMovie=createAsyncThunk('movie/fetchMovie',async(movieId)=>{
    const response= await axios.get(`${BASEURL}/movie/${movieId}?api_key=${APIKEY}`)
    return response.data
})
const movieDetailSlice=createSlice({
    name:'movieDetail',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchParticularMovie.pending,(state=>{
            state.status='loading'
        }))
        builder.addCase(fetchParticularMovie.fulfilled,((state,action)=>{
            state.status='idle'
            state.movie=action.payload
        }))
        builder.addCase(fetchParticularMovie.rejected,(state=>{
            state.status='error'
        }))
    }
})

export default movieDetailSlice.reducer