import TButton from "@components/TButton";
import ModalHint from "@components/ModalHint";

function Home() {
  return (
    <>
      <div className="flex justify-end mr-8">
        <ModalHint />
      </div>
      <div>
        <div className="flex justify-center py-8 ">
          <img
            className="h-24 w-auto"
            src="./src/assets/logo poing.png"
            alt="logo d'un point"
          />
        </div>
        <div className="acroche">
          <h1>Bienvenue sur Bagarr.iO !</h1>
          <h2>
            Devenez maître du tournoi grâce à cette application, affrontez vous
            : joueur contre joueur ou en groupe ! Mettez en jeu des récompenses
            pour les gagnants et des gages pour les perdants !
          </h2>
        </div>
        <div className="flex justify-center py-8">
          <TButton
            variant="secondary"
            rounded
            buttonClass="text-[##FFFFFF] h-24 w-24 text-xl"
          >
            Créer mon tournoi
          </TButton>
        </div>
      </div>
    </>
  );
}

export default Home;
