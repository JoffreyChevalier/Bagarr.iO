export default function GameType() {
  return (
    <div className="flex button_players">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-40">
          <input
            className="form-select appearance-none
        block
        w-full
        px-1
        py-1
        text-base
        font-normal
        text-white
        bg-lighter_dark_blue bg-clip-padding bg-no-repeat
        border border-solid border-light_grey_button
        rounded
        transition
        ease-in-out
        m-0
        text-center
        focus:text-white focus:bg-red focus:border-light_grey_button focus:outline-none focus:text-center"
            aria-label="Default select example"
          />
        </div>
      </div>
    </div>
  );
}
