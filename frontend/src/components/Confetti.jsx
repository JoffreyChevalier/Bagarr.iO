import { useWindowSize } from "react-use";
import BaseConfetti from "react-confetti";

function Confetti(props) {
  const { width, height } = useWindowSize();
  return (
    <BaseConfetti
      style={{ zIndex: 9999 }}
      width={width}
      height={height}
      {...props}
    />
  );
}

export default Confetti;
