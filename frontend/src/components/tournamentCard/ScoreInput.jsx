function SetScoreButton({ name, onChange }) {
  return (
    <div>
      <input
        value={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Score"
        className="w-16 mr-8 font-standard_font text-black placeholder:text-slate-400 bg-white 
        border border-solid border-gray-500 rounded-md text-center focus:text-black focus:bg-slate-100 focus:border-border_button focus:outline-none focus:text-center"
      />
    </div>
  );
}

export default SetScoreButton;
