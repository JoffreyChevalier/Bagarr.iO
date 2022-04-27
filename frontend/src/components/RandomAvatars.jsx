import * as React from "react";
import { useState, useEffect } from "react";

const refresh = () => {
  return `https://avatars.dicebear.com/api/avataaars/:${Math.floor(
    Math.random() * 1000000
  )}.svg`;
};

function RandomAvatar({ onChange }) {
  const [newAvatar, setNewAvatar] = useState(refresh());

  useEffect(() => {
    onChange(newAvatar);
  }, [newAvatar]);

  return (
    <div className="random-avatar">
      <img width="200" height="200" src={newAvatar} alt="Your avatar" />
      <button type="button" onClick={() => setNewAvatar(refresh())}>
        Randomize
      </button>
    </div>
  );
}

export default RandomAvatar;
