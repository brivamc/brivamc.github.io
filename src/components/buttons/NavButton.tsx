/** @jsxImportSource @emotion/react */
import { Button, ButtonProps, css } from "@mui/material";
import React from "react";

import { darkThemePalette, lightThemePalette } from "../layout/theme";

interface NavButtonProps {
  url: string;
  children: React.ReactNode;
}

const buttonStyle = css({
  fontSize: "16px"
});

export const NavButton: React.FC<NavButtonProps & ButtonProps & {
  isSelected?: boolean;
}> = ({ url, children, isSelected = false, ...rest }) => {

  return (
    <Button
      aria-label="navigation button"
      href={url}
      sx={[
        theme => (theme.palette.mode === "light" ? {
          color: isSelected ? lightThemePalette.primary.light : "primary"
        } : {
          color: isSelected ? darkThemePalette.primary.light : "primary"
        })
      ]}
      css={buttonStyle}
      {...rest}
    >
      {children}
    </Button>
  );
};
