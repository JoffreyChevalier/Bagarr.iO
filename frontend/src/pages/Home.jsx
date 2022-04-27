import ModalHint from "@components/ModalHint";
import TButton from "@components/TButton";
import Footer from "@components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <body>
        <div>
          <div className="flex justify-center py-8 ">
            <img
              className="h-32 sm:h-48"
              src="./src/assets/logo poing.png"
              alt="logo d'un point"
            />
          </div>
          <div className="acroche">
            <h1>Bienvenue sur Bagarr.iO !</h1>
            <h2>
              Devenez maître du tournoi grâce à cette application, affrontez
              vous : joueur contre joueur ou en groupe ! Mettez en jeu des
              récompenses pour les gagnants et des gages pour les perdants !
            </h2>
          </div>
          <div className="flex justify-center py-8">
            <Link to="/configurations">
              <TButton
                variant="secondary"
                rounded
                buttonClass="text-[##FFFFFF] h-24 w-24 text-xl"
              >
                Créer mon tournoi
              </TButton>
            </Link>
          </div>
          <div className="flex justify-center">
            <ModalHint />
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default Home;
