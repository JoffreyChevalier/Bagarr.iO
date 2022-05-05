import { Link } from "react-router-dom";
import logo from "@assets/logo_and_text.png";
import Footer from "./Footer";

function Body({ children, fullScreen = false }) {
  return (
    <div>
      {fullScreen ? (
        <div>{children}</div>
      ) : (
        <div>
          <div className="m-8 px-12 border backdrop-blur-md text-black shadow-xl rounded-xl">
            <div className="flex-col justify-center pb-12">
              <Link to="/">
                <img className="w-24 my-12" src={logo} alt="logo d'un point" />
              </Link>
              {children}
            </div>
          </div>
          <div className="flex justify-center">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
