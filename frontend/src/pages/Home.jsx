import ModalHint from "@components/ModalHint";

function Home() {
  return (
    <>
      <div className="flex justify-end mr-8">
        <ModalHint />
      </div>
      <div className="acroche">
        <h1>Bienvenue sur Bagarr.iO !</h1>
        <h2>
          Devenez maître du tournoi grâce à cette application, affrontez vous :
          joueur contre joueur ou en groupe ! Mettez en jeu des récompenses pour
          les gagnants et des gages pour les perdants !
        </h2>
      </div>
    </>
  );
}

export default Home;
