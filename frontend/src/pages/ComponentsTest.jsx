import NbrPlayerButton from "@components/NbrPlayerButton";
import GameType from "@components/GameType";

export default function ComponentsTest() {
  return (
    <>
      <h1>Page de tests</h1>
      <div>
        <NbrPlayerButton minValue={5} maxValue={20} />
        <GameType />
      </div>
    </>
  );
}
