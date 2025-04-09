import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState} from "react";

export const Favorites = () => {
  const { store, dispatch } = useGlobalReducer();

  const favoritesArray = ["People", "Planets", "Vehicles"];
  
  return (
    <div className="dropdown d-flex mx-auto ">
      <button 
        className="btn btn-success dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      > 
        Favorites {store?.favorites.length} 
      </button> 
     
      <ul className="dropdown-menu">
        {store.favorites.map((item) => {
          return (
            <li key={item}>
              <a onClick={(e)=> dispatch({type: "dislike", payload: item})} className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
