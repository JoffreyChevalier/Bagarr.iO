import NbrPlayerButton from "@components/NbrPlayerButton";
import { ArrowRightIcon as ArrowRightIconOutline } from "@heroicons/react/outline";

function AddingPlayers() {
  return (
    <div>
      <h1 className="mainTitle">ICI la page d'ajout de participants</h1>
      <NbrPlayerButton minValue={1} maxValue={36} />
      <ArrowRightIconOutline className="h-5 w-5 text-[#70A288]" />
    </div>
  );
}

export default AddingPlayers;
