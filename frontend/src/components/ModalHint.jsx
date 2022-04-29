import Popup from "reactjs-popup";

export default function ModalHint({ buttonClass }) {
  return (
    <div>
      <Popup
        trigger={
          <button type="button" className={buttonClass}>
            guide
          </button>
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
                <h1 className="header text-black text-xl font-lg font-bold tracking-normal leading-tight mb-4">
                  {" "}
                  Bagarr.iO, comment ça fonctionne ?{" "}
                </h1>
                <div className="content">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions flex mt-8 items-center justify-start w-full">
                  <button
                    type="button"
                    className="button focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-[#BA8208] rounded text-white px-8 py-2 text-sm"
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
