function Body() {
  return (
    <div className="flex-col item-center justify-center">
      <div className="mt-4 h-fit p-16 max-w-sm sm:max-w-lg lg:max-w-2xl border border-black backdrop-blur-md text-black shadow-xl rounded-xl">
        <div className="flex justify-center pb-12">
          <img
            className="w-fit"
            src="./src/assets/logo_and_text.png"
            alt="logo d'un point"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
