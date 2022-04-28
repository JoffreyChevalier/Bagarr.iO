import TButton from "@components/TButton";
import Input from "@components/Input";
import Popup from "reactjs-popup";

function SetScoreButton() {
  return (
    <Popup
      trigger={
        <TButton
          rounded
          variant="secondary"
          buttonClass="text-[##FFFFFF] h-24 w-24 text-xl"
        >
          SCORE
        </TButton>
      }
      modal
      nested
    >
      {(close) => (
        <div>
          <div className="container mx-auto w-11/12 md:w-2/2 max-w-xxl">
            <div className="modal relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              {/* eslint-disable-next-line */}
              <div
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                onClick={close}
              ></div>
              <h1 className="header text-black text-xl font-lg font-bold tracking-normal leading-tight mb-4">
                Score du Match
              </h1>
              <div className="content">
                <div>
                  <h3>Score du Joueur 1</h3>
                  <Input placeholder="score" />
                </div>
                <div>
                  <h3>Score du Joueur 2</h3>
                  <Input placeholder="score" />
                </div>
              </div>
              <div className="actions flex mt-8 items-center justify-start w-full">
                <button
                  type="button"
                  className="button focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-[#BA8208] rounded text-white px-8 py-2 text-sm"
                  onClick={() => {
                    close();
                  }}
                >
                  Match Terminé
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default SetScoreButton;
