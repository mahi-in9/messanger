import React, { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const PasswordToggleFieldDemo = ({ placeholder = "Enter your password" }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="
        flex items-center justify-between gap-2
        h-9 w-full px-2
        rounded-md text-gray-800 bg-transparent
      "
    >
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className="
          outline-none bg-transparent w-full
          text-sm placeholder:text-gray-400
        "
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="
          flex items-center justify-center text-gray-600
          hover:text-gray-800 transition
        "
      >
        {visible ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </button>
    </div>
  );
};

export default PasswordToggleFieldDemo;
