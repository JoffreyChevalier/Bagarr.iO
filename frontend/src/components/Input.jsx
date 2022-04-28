export default function TournamentName({ name, onChange, placeholder }) {
  return (
    <div className="flex button_players">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-40">
          {/* On fait passer les données la saisie de l'utilisateur via la props onChange */}
          <input
            value={name}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className="form-select appearance-none
        block
        w-full
        px-1
        py-1
        text-base
        font-normal
        text-white
        bg-button_bg bg-clip-padding bg-no-repeat
        border border-solid border-border_button
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-button_bg focus:border-border_button focus:outline-none"
            aria-label="Default select example"
          />
        </div>
      </div>
    </div>
  );
}
