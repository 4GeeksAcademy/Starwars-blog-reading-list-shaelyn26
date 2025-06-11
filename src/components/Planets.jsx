import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Planets = () => {
  const { store, dispatch } = useGlobalReducer();
  
  return (
    <div className="container">
      <h1 className="text-success">Planets</h1>
      <div
        className="d-flex gap-3 overflow-auto"
        style={{
          whiteSpace: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "thin",
        }}
      >
        {store.planets.length > 0
          ? store.planets.map((planets, i) => {
              return (
                <div
                  className="card"
                  style={{ width: "12 rem", flex: "0 0 auto" }}
                >
                  <img
                    src={"https://placehold.co/400x200"}
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <div> name: {planets.name}</div>
                    <div> climate: {planets.climate}</div>
                    <div> population: {planets.population}</div>
                    <div> diameter: {planets.diameter}</div>
                    <div> terrain: {planets.terrain}</div>
                    <div> gravity: {planets.gravity}</div>
                    
                    <Link to={"/pluto/" + planets.uid}>
                      <button className="btn btn-success">Click me</button>
                    </Link>
                    <button
                      onClick={() =>
                        dispatch({ type: "my-likes", payload: planets.name })
                      }
                    >
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </div>
              );
            })
          : "no planets"}
      </div>
    </div>
  );
};
