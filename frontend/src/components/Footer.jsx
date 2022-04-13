import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <nav>
        <li>
          <NavLink to="/formulaires">Formulaires</NavLink>
        </li>
        <li>
          <NavLink to="/mentionslegales">Mentions Légales</NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Footer;
