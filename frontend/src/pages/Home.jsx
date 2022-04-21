import ModalHint from "@components/ModalHint";

function Home() {
  return (
    <>
      <div className="flex justify-end mr-8">
        <ModalHint />
      </div>
      <div>
        <h1>Bienvenue sur Bagarr.IO !</h1>
        <h3>
          Devenez maître du tournoi grâce à cette application, affrontez vous :
          joueur contre joueur ou en groupe ! Mettez en jeu des récompenses pour
          les gagnants et des gages pour les perdants !
        </h3>
      </div>
    </>
  );
}
export default Home;
