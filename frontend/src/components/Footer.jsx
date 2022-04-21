import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <ul className="formlegales">
        <li>© 2022 Copyright.</li>
        <li>
          <NavLink to="/formulaires">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/mentionslegales">Mentions Légales</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
