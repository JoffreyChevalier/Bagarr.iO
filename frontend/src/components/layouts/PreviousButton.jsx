function NextButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative inline-flex items-center justify-center overflow-hidden font-medium text-first_color transition duration-300 ease-out border-2 border-first_color rounded-full shadow-md group"
    >
      <span className="absolute rotate-180 inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-first_color group-hover:translate-x-0 ease">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-first_color transition-all duration-300 transform group-hover:-translate-x-full ease">
        Retour
      </span>
      <span className="relative invisible">Button Text</span>
    </button>
  );
}

export default NextButton;
