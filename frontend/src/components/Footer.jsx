import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <ul className="formlegales m-">
        <li>
          <NavLink to="/formulaires">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/mentionslegales">Mentions Légales</NavLink>
        </li>
        <li>© 2022 Copyright.</li>
      </ul>
    </footer>
  );
}

export default Footer;
