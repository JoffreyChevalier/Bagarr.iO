import Footer from "@components/layouts/Footer";
import StartButton from "@components/StartButton";
import ModalHint from "@components/ModalHint";

import logo from "@assets/logo_and_text.png";

function Home() {
  return (
    <div className="flex-col item-center justify-center">
      <div className="m-4 p-16 max-w-sm sm:max-w-lg lg:max-w-2xl border md:backdrop-blur-md text-black shadow-xl rounded-xl">
        <div className="flex justify-center pb-12">
          <img className="w-fit" src={logo} alt="logo d'un point" />
        </div>
        <div className="acroche">
          <p className="font-standard_font text-lg">
            Bienvenue sur Bagarr.iO, le générateur en ligne de tournois.
            Affrontez vos amis sur tous vos jeux ou sport préférés et voyez en
            temps réel l’avancée de votre compétition ! Paramétrez en quelques
            secondes votre tournoi et laissez-vous guider par notre application.
            <br />
            GET READY TO RUMBLE !
          </p>
        </div>
        <div className="flex justify-center py-8">
          <StartButton />
        </div>
        <div className="flex justify-center mt-8">
          <ModalHint buttonClass="flex items-center bg-first_color rounded-full text-white drop-shadow-md h-8 px-4 py-1 text-md font-standard_font hover:bg-first_color_d hover:scale-105 hover:drop-shadow-lg active:scale-100" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
