import { useState, useEffect } from "react";
// Désactivation du useNavigate car obsolète pour le moment car utilisé sur createTournament
// import { useNavigate } from "react-router-dom";

export default function CountDown({ onTimeEnd }) {
  // const navigate = useNavigate();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    } else {
      setCounter("GO");
      timer = setInterval(() => onTimeEnd(), 1000);
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div className="mainTitle font-title_font text-9xl text-first_color">
        {counter}
      </div>
    </div>
  );
}
