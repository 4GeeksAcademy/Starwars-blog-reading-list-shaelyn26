import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SoloPlanet = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  console.log("this is my test", test);

  const planet = store.planets[test];
  console.log("my planet is avaiable ", planet);

  return <div>I want to see {planet?.name} full planet information </div>;
};
