/** @jsxImportSource @emotion/react */
import { Button, css } from "@mui/material";
import React from "react";
import { TechnologyStack } from "../../pages/about/aboutMeText";

const buttonStyle = css({
  textTransform: "none"
});

export const DevTechnologyButton: React.FC<{
  tech: TechnologyStack;
}> = ({ tech }) => {
  return (
    <Button
      href={tech.url}
      css={buttonStyle}
      variant="outlined"
      color="primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {tech.name}
    </Button>
  );
};
