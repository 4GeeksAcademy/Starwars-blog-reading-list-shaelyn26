import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';

export const People = () => {

  const {store, dispatch} =useGlobalReducer()
  return(
    <div>
        {store.planets.length > 0 ? 
        store.map((planets)=>{
            return(
                <div> 
                    {planets.name} 
                    </div>
            )
        } )
        :
    "no planets"}
    </div>
  )
}