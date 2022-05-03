import Footer from "./Footer";

function Body({ children }) {
  return (
    <>
      <div className="">
        <div className="m-8 px-12 border backdrop-blur-md text-black shadow-xl rounded-xl">
          <div className="flex-col justify-center pb-12">
            <img
              className="w-24 my-12"
              src="./src/assets/logo_and_text.png"
              alt="logo d'un point"
            />
            {children}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
}

export default Body;
