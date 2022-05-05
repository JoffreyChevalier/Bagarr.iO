import ScoreInput from "@components/tournamentCard/ScoreInput";

function PlayerCard({ playerName, playerImg }) {
  return (
    <div className="flex items-center justify-between bg-first_color my-11 h-16 w-60 rounded-lg">
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
      <ScoreInput />
    </div>
  );
}

export default PlayerCard;
