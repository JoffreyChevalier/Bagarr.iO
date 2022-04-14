import { NavLink } from "react-router-dom";

function WorkingNavbar() {
  return (
    <div className="flex mb-5 justify-center">
      <nav className="flex mt-1 border-2 border-black bg-slate-200">
        <h3 className="flex justify-center px-8 bg-black text-white text-xl">
          WorkingNavbar
        </h3>
        <div className=" flex list-none mr-4 border-black">
          <li className=" px-2 hover:bg-yellow-200 text-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" px-2 hover:bg-yellow-200 text-black">
            <NavLink to="/configurations">Configurations-Tournois</NavLink>
          </li>
          <li className=" px-2 hover:bg-yellow-200 text-black">
            <NavLink to="/tournois">Tournois</NavLink>
          </li>
          <li className=" px-2 hover:bg-yellow-200 text-black">
            <NavLink to="/classementpoint">Classement à Point</NavLink>
          </li>
          <li className=" px-2 hover:bg-yellow-200 text-black">
            <NavLink to="/classementfinal">Classement-Final</NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default WorkingNavbar;
