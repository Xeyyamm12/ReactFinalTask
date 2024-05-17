import React from 'react';
import './MovieItem.css';
import { useDispatch } from 'react-redux';
import { add } from '../../Reducer/MoviesReducer';

const MovieItem = ({movie})=> {
    const dispatch=useDispatch()
   
        const { Title, Year, Poster } = movie;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button onClick={()=>{
                        dispatch(add(movie))
                    }} type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    
}
 
export default MovieItem;