import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const SoloPlanet = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  console.log("this is my test", test);

  const getPlanets = () => {
    fetch("https://swapi.dev/api/planets")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "set-planets", payload: data.results }));
  };

  const planet = store.planets[test];
  console.log("my planet is avaiable ", planet);

  useEffect(() => {
      if(store.planets.length === 0) getPlanets();
      }, []);

  return <div className="container">
    <h1>{planet?.name} Planet Information</h1>
    <h3 className="details">Planet History:</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Cum consequuntur ea error architecto cupiditate ipsum mollitia vero assumenda nihil doloribus, 
      eveniet voluptate rerum exercitationem eligendi vel perferendis, quo nemo. Minima?</p>
      <h4>Details:</h4>
      <ul>
        <li>this planet has...</li>
        <li>this planet has...</li>
        <li>this planet has...</li>
        <li>this planet has...</li>
      </ul>
    </div>;
};
