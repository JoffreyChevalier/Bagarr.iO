import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center">
      <div className="max-w-screen-xl mx-4 my-12 mx-auto sm:mx-6 lg:mx-8">
        <div className="max-w-3xl space-y-4">
          <nav className="flex flex-wrap justify-evenly gap-4 sm:gap-8 p-4 text-sm font-standard_font border border-black backdrop-blur-md text-black shadow-xl rounded-xl">
            <NavLink to="/" className="hover:text-first_color">
              Back to Home
            </NavLink>

            <NavLink to="/formulaires" className="hover:text-first_color">
              Contact
            </NavLink>

            <NavLink to="/mentionslegales" className="hover:text-first_color">
              Mentions Légales
            </NavLink>
          </nav>

          <p className="text-xs font-medium">2022 ©Bagarr.iO</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
