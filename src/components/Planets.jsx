import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export const Planets = () => {

  const { store, dispatch } = useGlobalReducer()
  return (
    <div>
      <h1>Planets</h1>
      {store.planets.length > 0 ?
        store.planets.map((planets, i) => {
          return (
            <div>
              <div> name: {planets.name}</div>
              <div> climate: {planets.climate}</div>
              <div> population: {planets.population}</div>
              <Link to={"/solo/" + i}>
                <button className="btn btn-primary">Click me</button>
              </Link>
            </div>
          )
        })
        :
        "no planets"}
    </div>
  )
}
