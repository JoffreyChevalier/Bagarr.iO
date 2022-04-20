import TButton from "@components/TButton";
import {
  ArrowRightIcon as ArrowRightIconOutline,
  ArrowLeftIcon as ArrowLeftIconOutline,
} from "@heroicons/react/outline";

// Exemples de boutons à personnaliser
function Formulaire() {
  return (
    <div>
      <h1>ICI la page du Formulaire</h1>
      <TButton variant="transparent">
        <ArrowRightIconOutline className="h-5 w-5 text-[#70A288] " />
      </TButton>

      <TButton
        variant="primary"
        rounded
        buttonClass="text-[##FFFFFF] h-24 w-24 text-xl"
      >
        Prêt ?
      </TButton>

      <TButton variant="transparent">
        <ArrowLeftIconOutline className="h-5 w-5 text-[#70A288]" />
      </TButton>

      <TButton variant="primary" buttonClass="text-[  #FFFFFF] text-sm">
        Choisi ton avatar
      </TButton>
    </div>
  );
}
export default Formulaire;
