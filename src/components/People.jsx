import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export const People = () => {

  const { store, dispatch } = useGlobalReducer()
  return (
    <div className="container">
      <h1 className="text-danger">People</h1>
      <div className="d-flex gap-3 overflow-auto" style={{ whiteSpace: "nowrap", overflowX: "auto", scrollbarWidth: "thin" }}>
        {store.people.length > 0 ?
          store.people.map((person, i) => {
            return (
              <div className="card" style={{ width: "12 rem", flex: "0 0 auto" }}>
                <img src={"https://placehold.co/400x200"}
                  className="card-img-top" style={{ objectFit: "cover" }} />
                <div className="card-body">
                  <div> name: {person.name} </div>
                  <div> hair-color: {person.hairColor} </div>
                  <div> height: {person.height} </div>
                  <div> skin-color: {person.skinColor} </div>

                  <Link to={"/solo/" + i}>
                    <button className="btn btn-danger">Click me</button>
                  </Link>
                </div>
              </div>
            )
          })
          :
          "no people"
        }
      </div>
    </div>
  )
}