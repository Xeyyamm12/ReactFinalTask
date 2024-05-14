import React, { Component, useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../Reducer/MoviesReducer';

const Movies = ()=> {
const data = useSelector(state=>state.MovieList)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchMovie('Batman'))
},[])

console.log(data.data,'wefwefew')
        return ( 
            <ul className="movies">
                {data.data?.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem movie={movie} />
                    </li>
                ))}
            </ul>
        );
    
}
 
export default Movies;