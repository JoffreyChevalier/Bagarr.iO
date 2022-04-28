import PlayerCard from "./PlayerCard";
import SetScoreButton from "./SetScoreButton";

function TournamentCard() {
  return (
    <div className=" m-5">
      <div className="p-4 pb-0 border border-gray-100 shadow-xl rounded-xl m-4">
        <h1>Match #</h1>
        <div className="flex-column">
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
      <div className=" relative -top-44 -right-80">
        <SetScoreButton />
      </div>
    </div>
  );
}

export default TournamentCard;
