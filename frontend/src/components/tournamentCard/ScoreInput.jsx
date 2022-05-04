function SetScoreButton({ name, onChange }) {
  return (
    <div className="flex button_players">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-40">
          {/* On fait passer les données la saisie de l'utilisateur via la props onChange */}
          <input
            value={name}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Score"
            className="form-select appearance-none
            block
            w-16
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

export default SetScoreButton;
