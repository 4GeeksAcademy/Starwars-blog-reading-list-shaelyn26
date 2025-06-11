import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const SoloPlanet = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const [planet, setPlanet] = useState({});
  console.log("this is my test", test);

  const getPlanet = () => {
    fetch("https://swapi.tech/api/planets/" + test)
      .then((resp) => resp.json())
      .then((data) => setPlanet(data.result.properties));
  };

  console.log("my planet is avaiable ", planet);

  useEffect(() => {
      getPlanet()
      }, []);

  return <div className="container card">
    <h1 className="title p-3">{planet?.name} Planet Information</h1>
    
    <h3 className="details">Planet History:</h3>
    
    <p>{planet?.name} has been featured in {planet.films} in the Star Wars Sequels.
      {planet?.name} climate is {planet.climate} and has a diameter of {planet.diameter}. 
    The orbital period of {planet?.name} is {planet.orbital_period} with a population of {planet.population}.</p>
     
    
    </div>;
};
