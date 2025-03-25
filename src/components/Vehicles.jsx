import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export const Vehicles = () => {

  const { store, dispatch } = useGlobalReducer()
  return (
    <div>
      <h1>Vehicles</h1>

      {store.vehicles.length > 0 ?
        store.vehicles.map((vehicles, i) => {
          return (
            <div>
              <div>name: {vehicles.name}</div>
              <div>model: {vehicles.model}</div>
              <div>passengers: {vehicles.passengers}</div>
              <Link to={"/solo/" + i}>
                <button className="btn btn-danger">Click me</button>
              </Link>
            </div>
          )
        })
        :
        "no vehicles"}
    </div>
  )
}