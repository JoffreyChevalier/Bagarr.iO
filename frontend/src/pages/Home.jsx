import Footer from "@components/layouts/Footer";
import StartButton from "@components/StartButton";

function Home() {
  return (
    <>
      <div className="flex-col item-center justify-center">
        <div className="mt-4 h-fit p-16 max-w-sm sm:max-w-lg lg:max-w-2xl border backdrop-blur-md text-black shadow-xl rounded-xl">
          <div className="flex justify-center pb-12">
            <img
              className="w-fit"
              src="./src/assets/logo_and_text.png"
              alt="logo d'un point"
            />
          </div>
          <div className="acroche">
            <p className="font-standard_font text-lg">
              Bienvenue sur Bagarr.iO, le générateur en ligne de tournois.
              Affrontez vos amis à tous vos jeux ou sport préférés et voyez en
              temps réel l’avancée de votre compétition ! Paramétrez en quelques
              secondes votre tournoi et laissé vous guidez au fur et mesures des
              matchs qui sont générés automatiquement.
              <br />
              GET READY TO RUMBLE !{" "}
            </p>
            <div className="flex justify-center mt-8" />
          </div>
          <div className="flex justify-center py-8">
            <StartButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
