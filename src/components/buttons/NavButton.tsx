/** @jsxImportSource @emotion/react */
import { Button, ButtonProps, css } from "@mui/material";
import React from "react";

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
      color={isSelected ? "secondary" : "primary"}
      css={buttonStyle}
      {...rest}
    >
      {children}
    </Button>
  );
};
