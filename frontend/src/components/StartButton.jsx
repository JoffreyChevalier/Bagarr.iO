import { Link } from "react-router-dom";
import ModalHint from "./ModalHint";

function StartButton() {
  return (
    <div className="startButton font-title_font text-second_color">
      <ModalHint buttonClass="clicButton border-2 border-second_color" />
      <Link to="/creer-un-tournoi">
        <button
          type="button"
          className="clicButton border-2 border-second_color"
        >
          START
        </button>
      </Link>
    </div>
  );
}

export default StartButton;
