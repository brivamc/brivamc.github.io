/** @jsxImportSource @emotion/react */
import { Button, css } from "@mui/material";
import React from "react";

/* TODO: put in another file? */
const MY_EMAIL = "brivamc@udel.edu";

const buttonStyle = css({
  textTransform: "none",
  fontWeight: "600",
  width: "6.5em",
  height: "3em",
  fontSize: "30px"
});

export const MailToButton: React.FC = () => {
  return (
    <Button
      css={buttonStyle}
      target="_top"
      href={`mailto:${MY_EMAIL}`}
      rel="noopener noreferrer"
      variant="contained"
      disableElevation
    >
      Contact
    </Button>
  );
}
