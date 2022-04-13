import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/configurations">Configurations Tournois</NavLink>
        </li>
        <li>
          <NavLink to="/tournois">Tournois</NavLink>
        </li>
        <li>
          <NavLink to="/classementpoint">Classement à Point</NavLink>
        </li>
        <li>
          <NavLink to="/classementfinal">Classement Final</NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
