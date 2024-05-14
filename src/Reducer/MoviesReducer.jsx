import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState =  {
    isLoading: false,
    data:[
       
    ],
    error:false
    
}
export const fetchMovie  = createAsyncThunk('fetchMovie',async(name)=>{
    const data = await axios.get(`https://www.omdbapi.com/?s=${name}&page=2?&apikey=1fd4bd0f`)

    return data.data
})
export const ListSlice = createSlice({
    name:"MovieList",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMovie.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchMovie.fulfilled,(state,action)=>{
           
            state.isLoading = false
            state.data = action.payload.Search
        })
        builder.addCase(fetchMovie.rejected,(state)=>{
            state.error = true
        })
    }
})

export const {} = ListSlice.actions
export default ListSlice.reducer
