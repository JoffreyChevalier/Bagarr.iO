import CountDown from "@components/CountDown";

export default function Timer({ onTimeEnd }) {
  return (
    <div className="timer flex justify-center items-center">
      <CountDown onTimeEnd={onTimeEnd} />
    </div>
  );
}
