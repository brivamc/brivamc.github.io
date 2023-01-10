/** @jsxImportSource @emotion/react */
import { ButtonProps, css, IconButton, PaletteMode } from "@mui/material";
import React from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const buttonStyle = css({
  "&:hover": {
    background: "transparent"
  }
});

export const LightDarkThemeButton: React.FC<ButtonProps & {
  mode: PaletteMode;
}> = ({ mode, ...rest }) => {
  return (
    <IconButton aria-label="change theme mode" css={buttonStyle} color="primary" {...rest}>
      {mode === "dark" ? <MdOutlineDarkMode /> : <MdLightMode />}
    </IconButton>
  );
}
