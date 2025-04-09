import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const SoloVehicles = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  console.log("this is my test", test);

  const getVehicles = () => {
    fetch("https://swapi.dev/api/vehicles")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({ type: "set-vehicles", payload: data.results })
      );
  };

  const vehicle = store.vehicles[test];
  console.log("my vehicle is avaiable ", vehicle);

  useEffect(() => {
      if(store.vehicles.length === 0) getVehicles();
      }, []);

  return (
    <div className="container">
      <h1>{vehicle?.name} Vehicle</h1>{" "}
      <h3 className="details">Vehicle History:</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Sint facere odio maiores facilis ex ab molestiae laudantium eveniet nesciunt, 
        qui earum ratione fugiat illo dolorem! Velit, voluptates harum! Tempora, perspiciatis.</p>
        <h4>Details:</h4>
      <ul>
        <li>this vehicle has...</li>
        <li>this vehicle has...</li>
        <li>this vehicle has...</li>
        <li>this vehicle has...</li>
      </ul>
    </div>
  );
};
