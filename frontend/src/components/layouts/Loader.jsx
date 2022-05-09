import logo from "@assets/logo.png";

function Loader() {
  return (
    <>
      <div className="border border-first_color rounded-full p-8 border-4 animate-[spin_2s_cubic-bezier(0.680,-0.550,0.265,1.550)_infinite]">
        <img src={logo} className="h-32 " alt="loading" />
      </div>
      <p className="text-center mt-8 font-title_font text-xl">
        CHARGEMENT<span className="animate-pulse">.</span>
        <span className="animate-pulse animation-delay-200">.</span>
        <span className="animate-pulse animation-delay-400">.</span>
      </p>
    </>
  );
}

export default Loader;
