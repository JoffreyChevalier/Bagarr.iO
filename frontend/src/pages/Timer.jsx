import CountDown from "@components/CountDown";
import TButton from "@components/TButton";

export default function test() {
  return (
    <div>
      <div className="flex justify-center py-8">
        <img
          className="h-32 sm:h-48"
          src="./src/assets/logo poing.png"
          alt="logo d'un point"
        />
      </div>
      <div className="flex justify-center py-8">
        <TButton
          variant="secondary"
          rounded
          buttonClass="text-[##FFFFFF] h-24 w-24 text-xl"
        >
          <CountDown />
        </TButton>
      </div>
    </div>
  );
}
