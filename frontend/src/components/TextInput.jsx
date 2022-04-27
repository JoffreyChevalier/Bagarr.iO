export default function GameType({ setTournamentName }) {
  return (
    <div className="flex button_players">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-40">
          {/* On fait passer les données la saisie de l'utilisateur via la props onChange */}
          <input
            onChange={(event) => setTournamentName(event.target.value)}
            placeholder="Nom du tournoi"
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
        text-center
        focus:text-white focus:bg-button_bg focus:border-border_button focus:outline-none focus:text-center"
            aria-label="Default select example"
          />
        </div>
      </div>
    </div>
  );
}
