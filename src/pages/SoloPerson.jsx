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
    
  return <div className="container">
    <h1>{people?.name} Background Information</h1>
    <h3 className="details">History:</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Iure sint cum error aut fugiat et alias ut tempora debitis? 
      Praesentium quaerat nobis eius commodi aperiam perspiciatis sint qui maiores minima?</p>
      <h4>Characteristics:</h4>
      <ul>
        <li>this person has... </li>
        <li>this person has...</li>
        <li>this person has...</li>
      </ul>
      <h4>Allies:</h4>
      <p>{people?.name} is good friends with ....</p>.    {/* <--- may not work bc have to make the 'friends name' shuffle too---> */}
     </div>;
};
