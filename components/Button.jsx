// import { IconButton } from '@mui/material';
import IconButton from "@mui/material/IconButton";

import React from "react";

const Button = ({ handleClick, text, icon, variant }) => {
  return (
    <button
      className={`${
        variant === "sec"
          ? "text-yellow-400 px-3 hover:font-bold active:motion-preset-pop"
          : "bg-gradient-to-r from-blue/90 px-5 text-white  to-lightBlue shadow shadow-text/20 hover:bg-gradient-to-r hover:from-blue hover:to-lightBlue/90 hover:shadow-lg hover:shadow-text/30 active:motion-preset-pop "
      } capitalize  py-2 rounded `}
      onClick={handleClick}
    >
      <span className=" text-[16px] lg:text-[18px] ">{text}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
