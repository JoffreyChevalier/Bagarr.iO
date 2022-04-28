import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CountDown() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    } else {
      setCounter("GO");
      timer = setInterval(() => navigate("/tournois"), 1000);
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div className="mainTitle text-2xl">{counter}</div>
    </div>
  );
}
