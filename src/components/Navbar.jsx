import { Link } from "react-router-dom";
import { Favorites } from "./Favorites";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boiler</span>
        </Link>
      </div>
      <div className="m1-auto">
        <Favorites />
      </div>
    </nav>
  );
};
