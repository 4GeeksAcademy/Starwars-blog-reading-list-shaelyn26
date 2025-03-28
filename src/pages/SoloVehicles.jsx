import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SoloVehicles = () => {
  const { test } = useParams();
  const { store, dispatch } = useGlobalReducer();
  console.log("this is my test", test);

  const vehicle = store.vehicles[test];
  console.log("my vehicle is avaiable ", vehicle);

  return (
    <div>
      I want to see {vehicle?.name} full background information of the vehicle{" "}
    </div>
  );
};
