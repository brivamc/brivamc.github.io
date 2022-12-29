/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import React from "react";
import { TechnologyStack } from "../pages/about/aboutMeText";
import { css } from "@emotion/react";

const buttonStyle = css({
  textTransform: "none"
});

export const DevTechnologyButton: React.FC<{
  tech: TechnologyStack;
}> = ({ tech }) => {
  return (
    <Button
      href={tech.link}
      css={buttonStyle}
      variant="outlined"
      color="inherit"
      target="_blank"
      disableRipple
      disableElevation
    >
      {tech.name}
    </Button>
  );
};
