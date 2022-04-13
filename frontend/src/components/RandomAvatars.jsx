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
