import React, { Component, useState } from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Reducer/MoviesReducer";
import axios from "axios";

const Favorites = () => {
  const favs = useSelector((state) => state.MovieList.favorite);
  const dispatch = useDispatch();
  console.log(favs);
     const [state,setState] =  useState()
  return (
    <div className="favorites">
      <input value={state} placeholder="List Name " className="favorites__name" onInput={(e)=>{
        setState(e.target.value)
      }} />
      <ul className="favorites__list">
        {favs.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year}){" "}
              <button
                onClick={() => {
                  dispatch(remove(item));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={()=>{
        console.log('is')
        axios.post('https://acb-api.algoritmika.org/api/movies/list ',{title:state,movies:[...favs.map(item=>item.imdbID)]})
      }} type="button" className="favorites__save">
        save
      </button>
    </div>
  );
};

export default Favorites;
