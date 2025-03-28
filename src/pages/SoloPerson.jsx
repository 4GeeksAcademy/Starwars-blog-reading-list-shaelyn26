import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SoloPerson = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  console.log("this is my test", test);

  const people = store.people[test];
  console.log("my person is avaiable ", people);

  return <div>I want to see {people?.name} full background information </div>;
};
