import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()




 const getPeople = ()=>{
  fetch("https://www.swapi.tech/api/people")
  .then((resp)=>resp.json())
  .then((data)=>dispatch({type: "set-people", payload: data.results}));
  
 };
  
 const getPlanets = ()=>{
  fetch("https://www.swapi.tech/api/planets")
  .then((resp)=>resp.json())
  .then((data)=>dispatch({type: "set-planets", payload: data.results}));
  
 };
 
 
 const getVehicles = ()=>{
  fetch("https://www.swapi.tech/api/vehicles")
  .then((resp)=>resp.json())
  .then((data)=> dispatch({type: "set-vehicles", payload: data.results}));
 };


//  For useEffect() this means = whenever the page loads, do whats inside the arrow function
useEffect(()=>{
getPeople()
getPlanets()
getVehicles()
},[])
  console.log(store, "my store here")
	
  
  return (
		<div className="text-center mt-5">
			<People />
      <Planets />
      <Vehicles />
		</div>
	);
}; 