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
    onChange(newAvatar);
  }, [newAvatar]);

  return (
    <div className="flex flex-col items-center">
      <img width="150" src={newAvatar} alt="Your avatar" />
      <button
        className="mt-1 h-fit w-32 shadow-lg text-standard_font font-standard_font rounded-md text-white bg-first_color hover:bg-first_color_d hover:scale-110 hover:drop-shadow-lg active:scale-100"
        type="button"
        onClick={() => setNewAvatar(generateRandomAvatar())}
      >
        Choisissez <br />
        un avatar
      </button>
    </div>
  );
}

export default RandomAvatar;
