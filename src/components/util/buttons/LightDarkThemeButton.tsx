import { ButtonProps, IconButton, PaletteMode } from "@mui/material";
import React from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export const LightDarkThemeButton: React.FC<ButtonProps & {
  mode: PaletteMode;
}> = ({ mode, ...rest }) => {
  return (
    <IconButton color="primary" {...rest}>
      {mode === "dark" ? <MdOutlineDarkMode /> : <MdLightMode />}
    </IconButton>
  );
}
