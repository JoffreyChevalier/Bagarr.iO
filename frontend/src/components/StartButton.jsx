import { Link } from "react-router-dom";
import ModalHint from "./ModalHint";

function StartButton() {
  return (
    <div className="startButton font-title_font text-first_color">
      <ModalHint buttonClass="clicButton border-2 border-first_color" />
      <Link to="/creer-un-tournoi">
        <button
          type="button"
          className="clicButton border-2 border-first_color"
        >
          START
        </button>
      </Link>
    </div>
  );
}

export default StartButton;
