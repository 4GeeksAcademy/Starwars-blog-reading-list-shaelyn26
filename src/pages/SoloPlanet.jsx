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

  return <div className="container card">
    <h1 className="title p-3">{planet?.name} Planet Information</h1>
    
    <h3 className="details">Planet History:</h3>
    
    <p>{planet?.name} has been featured in {planet.films.length} in the Star Wars Sequels.
      {planet?.name} climate is {planet.climate} and has a diameter of {planet.diameter}. 
    The orbital period of {planet?.name} is {planet.orbital_period} with a population of {planet.population}.</p>
     
    
    </div>;
};
