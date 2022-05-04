import ScoreInput from "@components/tournamentCard/ScoreInput";

function PlayerCard({ playerName, playerImg }) {
  return (
    <div>
      <div className="border border-black">
        <div className="">
          <img
            src={playerImg}
            className="h-20 w-20"
            alt="Player Avatar"
            loading="lazy"
          />
          <div className="">
            <div className="">
              <p className="">{playerName}</p>
            </div>
          </div>
        </div>
        <ScoreInput />
      </div>
    </div>
  );
}

export default PlayerCard;
