export default function FinalRankingCard({
  avatarImg,
  playerName,
  medalImg,
  points,
}) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          className="rounded-lg -top-8 -mb-4 bg-transparent h-28 w-28"
          src={avatarImg}
          alt="avatar"
        />
        <p className="mainTitle pt-2 text-2xl ">{playerName}</p>
        <img
          className="rounded-lg bg-transparent h-24 w-24"
          src={medalImg}
          alt="medal"
        />
        <p className="mainTitle py-4 text-2xl">{points}</p>
      </div>
    </div>
  );
}
