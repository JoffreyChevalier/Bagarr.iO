import Container from "@components/Container";
import FinalRankingCard from "@components/ranking/FinalRankingCard";
import TButton from "@components/TButton";

function FinalRanking() {
  const rankings = [
    {
      rank: "1",
      playerName: "Silvio",
      points: "34",
    },
    {
      rank: "2",
      playerName: "Audrey",
      points: "30",
    },
    {
      rank: "3",
      playerName: "Nina",
      points: "22",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-y-12">
        <div>
          <div className="flex justify-center align-item mt-8">
            <FinalRankingCard
              avatarImg="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
              playerName="Nom du joueur"
              medalImg="../../src/assets/gold-medal.png"
              points="54 pts"
            />
          </div>

          <div className="flex justify-between">
            <FinalRankingCard
              avatarImg="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
              playerName="Nom du joueur"
              medalImg="../../src/assets/silver-medal.png"
              points="48 pts"
            />

            <FinalRankingCard
              avatarImg="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
              playerName="Nom du joueur"
              medalImg="../../src/assets/bronze-medal.png"
              points="35 pts"
            />
          </div>
        </div>

        <div>
          <div className="w-full h-12 border-t" />
          <h5 className="text-[#9A373F] font-bold text-xl pb-8">Classement</h5>
          <ul>
            {rankings.map((rank) => (
              <li
                key={rank.rank}
                className="flex flex-row justify-between text-white text-xl font-bold"
              >
                <p>
                  {rank.rank} - {rank.playerName}
                </p>
                <p>{rank.points} pts</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-5 w-full items-center pb-12">
          <TButton
            variant="secondary"
            buttonClass="text-[##FFFFFF] h-16 w-48 text-xl"
          >
            FIN
          </TButton>
          <TButton
            variant="secondary"
            buttonClass="text-[##FFFFFF] h-16 w-48 text-xl"
          >
            Rejouer cette partie
          </TButton>
        </div>
      </div>
    </Container>
  );
}

export default FinalRanking;
