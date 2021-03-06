function SetScoreButton({ value, onChangeScore }) {
  return (
    <div>
      <input
        type="number"
        min={0}
        max={99}
        value={value}
        onChange={(event) => onChangeScore(event.target.value)}
        placeholder="Score"
        className="w-16 h-12 mr-10 font-standard_font text-black placeholder:text-slate-400 bg-white 
        border border-solid border-gray-500 rounded-md text-center focus:text-black focus:bg-slate-100 focus:border-border_button focus:outline-none focus:text-center"
      />
    </div>
  );
}

export default SetScoreButton;
