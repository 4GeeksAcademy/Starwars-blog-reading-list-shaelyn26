import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {


    const { store, dispatch } = useGlobalReducer()

    return (
        <div class="dropdown d-flex mx-auto ">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
            </ul>
        </div>
    )
};












