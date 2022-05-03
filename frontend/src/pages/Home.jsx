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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus veniam, perspiciatis explicabo voluptatem provident
              nisi autem non, natus omnis aperiam corporis voluptatum eum. Unde
              molestias aspernatur autem assumenda repudiandae enim.{" "}
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
