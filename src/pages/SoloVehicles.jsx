import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const SoloVehicles = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const [vehicle, setVehicle] = useState({});
  console.log("this is my test", test);

  const getVehicle = () => {
    fetch("https://swapi.tech/api/vehicles/" + test)
      .then((resp) => resp.json())
      .then((data) => setVehicle(data.result.properties));
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <div className="container card">
      <h1 className="title p-3">{vehicle?.name} Background Information</h1>{" "}
      <h3 className="details">Vehicle History:</h3>
      <p>
        Along with many of the Planets featured in the Star Wars Sequeal, the
        vehicles also play a huge dynamic role in the films. The {vehicle?.name}{" "}
        has a cargo capacity of {vehicle.cargo_capacity} and only requires{" "}
        {vehicle.passengers} person per vehicle. The length of the vehicle is{" "}
        {vehicle.length} with a speed of {vehicle.max_atmosphering_speed}.
      </p>
    </div>
  );
};
