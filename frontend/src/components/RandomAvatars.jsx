import * as React from "react";
import { useState, useEffect } from "react";

const generateRandomAvatar = () => {
  return `https://avatars.dicebear.com/api/avataaars/:${Math.floor(
    Math.random() * 1000000
  )}.svg`;
};

function RandomAvatar({ onChange }) {
  const [newAvatar, setNewAvatar] = useState(generateRandomAvatar());

  useEffect(() => {
    if (newAvatar) {
      onChange(newAvatar);
    }
  }, [newAvatar]);

  return (
    <div className="random-avatar flex-col mt-2">
      <img width="130" src={newAvatar} alt="Your avatar" />
      <button
        className="mt-1 flex justify-center items-center h-7 w-32 shadow-lg text-standard_font font-md rounded-md text-white bg-first_color hover:bg-second_color"
        type="button"
        onClick={() => setNewAvatar(generateRandomAvatar())}
      >
        Avatar suivant...
      </button>
    </div>
  );
}

export default RandomAvatar;
