import React, { useState } from "react";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function NbrPlayerButton({ minValue = 1, maxValue = 10 }) {
  const [counter, setCounter] = useState(minValue);

  const decrementCount = () => {
    if (counter <= minValue) {
      return;
    }
    setCounter(counter - 1);
  };

  const incrementCount = () => {
    if (counter >= maxValue) {
      return;
    }

    setCounter(counter + 1);
  };

  return (
    <div className="flex button_players">
      <MinusButton onClick={decrementCount} />
      <div className="flex justify-center">
        <div className="mb-3 xl:w-10">
          <select
            value={counter}
            onChange={(e) => setCounter(Number(e.target.value))}
            className="form-select appearance-none
      block
      w-full
      px-1
      py-1
      text-base
      font-normal
      text-white
      bg-button_bg bg-clip-padding bg-no-repeat
      border border-solid border-border_button
      rounded
      transition
      ease-in-out
      m-0
      text-center
      focus:text-white focus:bg-red focus:border-border_button focus:outline-none focus:text-center"
            aria-label="Default select example"
          >
            {Array.from({ length: maxValue + 1 }, (_, i) => i + minValue).map(
              (i) => (
                <option key={i} className="text-center" value={i}>
                  {i}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <PlusButton onClick={incrementCount} />
    </div>
  );
}
