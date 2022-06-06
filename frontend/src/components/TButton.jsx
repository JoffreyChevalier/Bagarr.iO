import React from "react";

// Cette fonction permet de créer des variante de couleurs de boutons

function variantClassName(variant) {
  return {
    primary: "bg-[#04395E]",
    secondary: "bg-[#9A373F] border-[#808080]",
    transparent: "bg-transparent shadow-none",
  }[variant];
}

// fonction bouton qui permet de styliser les boutons avec des variables

export default function TButton({
  onClick,
  rounded = false,
  variant = "primary",
  icon = null,
  buttonClass,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center border border-transparent shadow-sm text-sm leading-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
      ${rounded ? "p-2 rounded-full" : "px-3 py-2 rounded-md"} 
      ${buttonClass} 
      ${variantClassName(variant)}`}
    >
      {children}
      {/* la ligne ci-dessous permet de faire un if */}
      {icon && icon}
    </button>
  );
}
