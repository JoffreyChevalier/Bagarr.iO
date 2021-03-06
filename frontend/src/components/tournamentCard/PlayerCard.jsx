import ScoreInput from "@components/tournamentCard/ScoreInput";

function PlayerCard({
  playerName,
  playerImg,
  score,
  onChangeScore,
  bgColor = "bg-first_color",
}) {
  return (
    <div
      className={`flex items-center justify-between ${bgColor} my-11 h-16 w-60 rounded-lg drop-shadow-md`}
    >
      <div className="flex flex-col items-center relative bottom-10 ">
        <img
          src={playerImg}
          className="h-24 "
          alt="Player Avatar"
          loading="lazy"
        />
        <div className="font-standard_font font-bold text-xl text-white">
          <p className="">{playerName}</p>
        </div>
      </div>
      <ScoreInput value={score} onChangeScore={onChangeScore} />
    </div>
  );
}

export default PlayerCard;
