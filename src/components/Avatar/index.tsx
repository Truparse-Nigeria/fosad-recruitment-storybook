import React from "react";

interface Props {
  source?: string;
  alt: string;
  colorClass?: string;
  initials?: string;
  size: "small" | "medium" | "large";
}

function Avatar({ source, alt, size, initials, colorClass }: Props) {
  if (source) {
    return (
      <img
        className={`${
          size === "small"
            ? "w-9 h-9"
            : size === "medium"
            ? "w-11 h-11"
            : size === "large"
            ? "w-17 h-17"
            : "w-10 h-10 h"
        } rounded-full mx-1 my-1`}
        src={source}
        alt={alt}
      />
    );
  }
  if (initials) {
    return (
      <div
        className={`${
          size === "small"
            ? "w-9 h-9 text-sm"
            : size === "medium"
            ? "w-11 h-11 text-lg"
            : size === "large"
            ? "w-17 h-17 text-2xl"
            : "w-10 h-10 text-base"
        } ${colorClass ? colorClass : ""} rounded-full flex justify-center items-center mx-1 my-1`}
      >
        {initials}
      </div>
    );
  }
  return null;
}

export default Avatar;
