import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <nav>
        <li>Copyright BagarreIO</li>
        <li>
          <NavLink to="/formulaires">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/mentionslegales">Mentions Légales</NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Footer;
