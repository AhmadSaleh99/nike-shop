import React from "react";

const Button = ({
  label,
  iconURL,
  backGroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`border flex justify-center items-center gap-2 px-7 py-4  text-lg leading-none rounded-full  font-montserrat
    ${
      backGroundColor
        ? `${backGroundColor} ${textColor} ${borderColor}`
        : `bg-coral-red border-coral-red text-white`
    } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
