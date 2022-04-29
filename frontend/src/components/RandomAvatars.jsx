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
    <div className="random-avatar">
      <img width="200" height="200" src={newAvatar} alt="Your avatar" />
      <button
        className="p-4 mx-8 items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="button"
        onClick={() => setNewAvatar(generateRandomAvatar())}
      >
        Avatar suivant...
      </button>
    </div>
  );
}

export default RandomAvatar;
