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
      getVehicle()
      }, []);

  return (
    <div className="container card">
      
      <h1 className="title p-3">{vehicle?.name} Vehicle</h1>{" "}
      
      <h3 className="details">Vehicle History:</h3>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Sint facere odio maiores facilis ex ab molestiae laudantium eveniet nesciunt, 
        qui earum ratione fugiat illo dolorem! Velit, voluptates harum! Tempora, perspiciatis.</p>
        
        <h4 className="section p-1">Details:</h4>
      
      <ul>
        <li>this vehicle has...</li>
        <li>this vehicle has...</li>
        <li>this vehicle has...</li>
        <li>this vehicle has...</li>
      </ul>
    
    </div>
  );
};
