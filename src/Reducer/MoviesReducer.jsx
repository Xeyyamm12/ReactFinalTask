import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState =  {
    isLoading: false,
    data:[
       
    ],
    favorite:[],
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
        add:(state,action)=>{
            state.favorite=[...state.favorite.filter(item=>item.imdbID!==action.payload.imdbID),action.payload]
        },
        remove:(state,action)=>{
            state.favorite=[...state.favorite.filter(item=>item.imdbID!==action.payload.imdbID)]
        }
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

export const {add ,remove} = ListSlice.actions
export default ListSlice.reducer
