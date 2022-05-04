export default function PlayerName({ name, onChangeName }) {
  return (
    <div className="flex button_players">
      <div className="flex justify-center">
        <div className=" xl:w-40">
          {/* On fait passer les données la saisie de l'utilisateur via la props onChange */}
          <input
            value={name}
            onChange={(event) => onChangeName(event.target.value)}
            placeholder="Nom du joueur"
            className="form-select appearance-none
        block
        w-full
        px-1
        py-1
        text-base
        font-standard_font
        text-black
        placeholder:text-slate-400
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-border_button
        rounded
        transition
        ease-in-out
        m-0
        text-center
        focus:text-black focus:bg-slate-100 focus:border-border_button focus:outline-none focus:text-center"
            aria-label="Default select example"
          />
        </div>
      </div>
    </div>
  );
}
