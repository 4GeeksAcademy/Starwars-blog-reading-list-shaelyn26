import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const SoloPerson = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  console.log("this is my test", test);

  const getPeople = () => {
    fetch("https://swapi.dev/api/people")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "set-people", payload: data.results }));
  };

  const people = store.people[test];
  console.log("my person is avaiable ", people);

  useEffect(() => {
    if(store.people.length === 0) getPeople();
    }, []);
    
  return <div className="container card">
    <h1 className="title p-3">{people?.name} Background Information</h1>
    
    <h3 className="details">History:</h3>
    
    <p> {people.name} is {people?.gender} and her birth year is {people?.birth_year}. 
      {people.name} has been seen in {people.films.length} Star Wars Films. Her height would be {people?.height} and her mass is {people?.mass}.</p>
     </div>;
};
