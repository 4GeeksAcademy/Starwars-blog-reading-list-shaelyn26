import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export const People = () => {

  const { store, dispatch } = useGlobalReducer()
  return (
    <div>
      <h1>People</h1>
      {store.people.length > 0 ?
        store.people.map((person, i) => {
          return (
            <div className="container">
              <div> name: {person.name} </div>
              <div> hair-color: {person.hairColor} </div>
              <div> height: {person.height} </div>
              <div> skin-color: {person.skinColor} </div>

              <Link to={"/solo/" + i}>
                <button className="btn btn-success">Click me</button>
              </Link>
            </div>
          )
        })
        :
        "no people"}
    </div>
  )
}