export default function TournamentName({ name, onChange }) {
  return (
    <div className="flex button_players">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-40">
          {/* On fait passer les données la saisie de l'utilisateur via la props onChange */}
          <input
            value={name}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Nom du tournoi"
            className="form-select appearance-none
        block
        w-full
        px-1
        py-1
        text-base
        font-standard_font
        text-white
        bg-[#9A373F] bg-clip-padding bg-no-repeat
        border border-solid border-border_button
        rounded
        transition
        ease-in-out
        m-0
        text-center
        focus:text-white focus:bg-[#9A373F] focus:border-border_button focus:outline-none focus:text-center"
            aria-label="Default select example"
          />
        </div>
      </div>
    </div>
  );
}
