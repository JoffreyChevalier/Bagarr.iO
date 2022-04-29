import { Link } from "react-router-dom";

import ModalHint from "@components/ModalHint";
// import Footer from "@components/Footer";
import StartButton from "@components/StartButton";

function Home() {
  return (
    <>
      <div className="flex align-center justify-center">
        <div className="flex-col h-fit p-16 max-w-sm sm:max-w-lg lg:max-w-2xl border border-black backdrop-blur-md text-black shadow-xl rounded-xl">
          <div className="flex justify-center pb-12">
            <img
              className="w-fit"
              src="./src/assets/logo_and_text.png"
              alt="logo d'un point"
            />
          </div>
          <div className="acroche">
            <p className="font-standard_font text-lg">
              Devenez maître du tournoi grâce à cette application,
              affrontez-vous : joueur contre joueur ou en groupe ! Mettez en jeu
              des récompenses pour les gagnants et des gages pour les perdants !
            </p>
            <div className="flex justify-center mt-8">
              <ModalHint />
            </div>
          </div>
          <div className="flex justify-center py-8">
            <Link to="/creer-un-tournoi">
              <StartButton />
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
