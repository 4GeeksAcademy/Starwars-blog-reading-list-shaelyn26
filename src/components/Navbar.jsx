import { Link } from "react-router-dom";
import { Favorites } from "./Favorites";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light dflex">
      {/* <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boiler</span>
        </Link>
      </div> */}
      <div className="mx-auto">
        <h1 className="title">STAR WARS BLOG</h1>
      </div>
      <div className="m1-auto">
        <Favorites />
      </div>
    </nav>
  );
};
