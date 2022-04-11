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
    <div>
      <img
        style={{ height: "200px", width: "200px" }}
        src={newAvatar}
        alt="Your avatar"
      />
      <button
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
