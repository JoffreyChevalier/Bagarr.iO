import Popup from "reactjs-popup";

export default function ModalHint({ buttonClass }) {
  return (
    <div>
      <Popup
        trigger={
          <button type="button" className={buttonClass}>
            Comment jouer ?{" "}
            <img
              src=".\src\assets\hello.png"
              className="ml-2 h-4 animate-waving-hand"
              alt="hand"
            />
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div>
            <div className="container m-4 w-11/12 md:w-2/2 max-w-xxl">
              <div className="modal relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 overflow-y-scroll">
                {/* eslint-disable-next-line */}
                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                  onClick={close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
                <h1 className="text-black text-xl font-lg font-title_font tracking-normal leading-tight mb-4">
                  {" "}
                  Bagarr.iO, comment ça fonctionne ?{" "}
                </h1>
                <div className="content text-sm sm:text-lg font-standard_font">
                  Cliquez sur le bouton START pour lancer le paramétrage de
                  votre tournoi. <br />
                  <br />
                  <h1 className="text-black text-xl font-lg font-title_font tracking-normal leading-tight mb-4">
                    Étape 1{" "}
                  </h1>
                  Sur la page qui s’affiche, vous allez pouvoir rentrer le nom
                  que vous voulez donner à votre compétition.
                  <br />
                  Cliquez sur le bouton suivant pour continuer
                  <br />
                  <br />
                  <h1 className="text-black text-xl font-lg font-title_font tracking-normal leading-tight mb-4">
                    Étape 2{" "}
                  </h1>
                  La page qui s’affiche vous permet d’ajouter les joueurs qui
                  vont participer. Rentrez le nom ou pseudo du joueur et cliquez
                  sur le bouton « avatar suivant… » pour choisir son avatar.
                  Cliquez ensuite sur le bouton « + » pour ajouter ce joueur à
                  la compétition. Recommencez chaque étape jusqu’à ce que tous
                  les joueurs soient ajoutés.
                  <br />
                  Cliquez sur le bouton suivant pour continuer
                  <br />
                  <br />
                  <h1 className="text-black text-xl font-lg font-title_font tracking-normal leading-tight mb-4">
                    Étape 3{" "}
                  </h1>
                  La page qui s’affiche vous permet de voir un ré-cap du tournoi
                  qui va être lancé. Vous pouvez ajouter ou supprimer des
                  joueurs si nécessaire.
                  <br />
                  Cliquez sur le bouton suivant pour continuer
                </div>
                <div className="actions flex mt-8 items-center justify-start w-full">
                  <button
                    type="button"
                    className="button focus:outline-none transition duration-150 ease-in-out hover:bg-first_color_d 0 bg-[#BA8208] rounded text-white px-8 py-2 text-sm"
                    onClick={() => {
                      close();
                    }}
                  >
                    Compris !
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
