import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { SoloPerson } from "./SoloPerson.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getPeople = () => {
    fetch("https://swapi.dev/api/people")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "set-people", payload: data.results }));
  };

  const getPlanets = () => {
    fetch("https://swapi.dev/api/planets")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "set-planets", payload: data.results }));
  };

  const getVehicles = () => {
    fetch("https://swapi.dev/api/vehicles")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({ type: "set-vehicles", payload: data.results })
      );
  };

  //  For useEffect() this means = whenever the page loads, do whats inside the arrow function
  useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
  }, []);
  console.log(store, "my store here");

  return (
    <div className="text-center mt-5">
      <People />
      <Planets />
      <Vehicles />
      <SoloPerson />
      <Link to={"/solo/" + 1}>
        {" "}
        <button>see more</button>{" "}
      </Link>

      
    </div>
  );
};
