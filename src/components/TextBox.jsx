import React from "react";

const TextBox = ({ ph = "", newclass = "" }) => {
  return (
    <input
      type="text"
      placeholder={ph}
      className={`h-12 bg-gray-800 text-white text-center outline-none rounded-md ${newclass}`}
    />
  );
};

export default TextBox;
