import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';

export const People = () => {

  const {store, dispatch} =useGlobalReducer()
  return(
    <div>
        {store.people.length > 0 ? 
        store.map((person)=>{
            return(
                <div> 
                    {person.name} 
                    </div>
            )
        } )
        :
    "no people"}
    </div>
  )
}