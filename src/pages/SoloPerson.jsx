import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const SoloPerson = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const [person, setPerson] = useState({});
  console.log("this is my test", test);

  const getPerson = () => {
    fetch("https://swapi.tech/api/people/" + test)
      .then((resp) => resp.json())
      .then((data) => setPerson(data.result.properties));
  };

  console.log("my person is available", person);

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container card">
      <h1 className="title p-3">{person?.name} Background Information</h1>

      <h3 className="details">History:</h3>

      <p>
        {" "}
        {person.name} is {person?.gender} and their birth year is{" "}
        {person?.birth_year}.{person.name} has been seen in {person.films} Star
        Wars Films. Their height would be {person?.height} and their mass is{" "}
        {person?.mass}.
      </p>
    </div>
  );
};
