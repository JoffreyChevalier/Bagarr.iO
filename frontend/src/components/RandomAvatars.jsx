import * as React from "react";
import { useState } from "react";

const refresh = () => {
  return `https://avatars.dicebear.com/api/avataaars/:${Math.floor(
    Math.random() * 1000000
  )}.svg`;
};

function RandomAvatar() {
  const [newAvatar, setNewAvatar] = useState(refresh());

  return (
    <div className="random-avatar">
      <img width="200" height="200" src={newAvatar} alt="Your avatar" />
      <button
        className="focus:outline-none transition duration-150 ease-in-out hover:bg-second_color bg-third_color rounded text-white px-4 py-1 text-md"
        type="button"
        onClick={() => {
          setNewAvatar(refresh());
        }}
      >
        Randomize
      </button>
    </div>
  );
}

export default RandomAvatar;
