import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';

export const People = () => {

  const {store, dispatch} =useGlobalReducer()
  return(
    <div>
        {store.vehicles.length > 0 ? 
        store.map((vehicles)=>{
            return(
                <div> 
                    {vehicles.name} 
                    </div>
            )
        } )
        :
    "no vehicles"}
    </div>
  )
}