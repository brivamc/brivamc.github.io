/** @jsxImportSource @emotion/react */
import { AppBar, css, Toolbar } from "@mui/material";
import React from "react";

import { SocialButtons } from "../buttons";

const footerStyle = css({
  top: "auto",
  bottom: 0
});

export const Footer: React.FC = () => {
  return (
    <AppBar color="inherit" elevation={0} enableColorOnDark position="relative" css={footerStyle}>
      <Toolbar>
        <SocialButtons size="medium" spacing={4} alignButtons="center" />
      </Toolbar>
    </AppBar>
  );
};
