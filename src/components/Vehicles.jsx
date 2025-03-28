import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Vehicles = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <div className="container">
      <h1 className="text-warning">Vehicles</h1>
      <div
        className="d-flex gap-3 overflow-auto"
        style={{
          whiteSpace: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "thin",
        }}
      >
        {store.vehicles.length > 0
          ? store.vehicles.map((vehicles, i) => {
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
                    <div>name: {vehicles.name}</div>
                    <div>model: {vehicles.model}</div>
                    <div>passengers: {vehicles.passengers}</div>
                    <div>length: {vehicles.length}</div>
                    <div>crew: {vehicles.crew}</div>
                    
                    <Link to={"/spaceship/" + i}>
                      <button className="btn btn-warning">Click me</button>
                    </Link>
                    <button
                      onClick={() =>
                        dispatch({ type: "my-likes", payload: vehicles.name })
                      }
                    >
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </div>
              );
            })
          : "no vehicles"}
      </div>
    </div>
  );
};
