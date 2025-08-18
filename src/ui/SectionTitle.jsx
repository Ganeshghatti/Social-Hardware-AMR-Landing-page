import React from "react";

export default function SectionTitle({ title, property }) {
  return (
    <div className={`flex relative w-fit ${property}`}>
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        className="absolute -left-4 -top-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="45" fill="#FF8700" />
        <rect
          y="6"
          width="6"
          height="45"
          transform="rotate(-90 0 6)"
          fill="#FF8700"
        />
      </svg>

      <h2 className="font-bold text-black text-3xl">{title}</h2>
      <svg
        width="45"
        height="44"
        viewBox="0 0 45 44"
        fill="none"
        className="absolute -right-4 -bottom-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="45"
          y="44"
          width="6"
          height="44"
          transform="rotate(180 45 44)"
          fill="#FF8700"
        />
        <rect
          x="45"
          y="38"
          width="6"
          height="45"
          transform="rotate(90 45 38)"
          fill="#FF8700"
        />
      </svg>
    </div>
  );
}
