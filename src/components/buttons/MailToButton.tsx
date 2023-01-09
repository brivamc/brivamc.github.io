/** @jsxImportSource @emotion/react */
import { Button, css } from "@mui/material";
import React from "react";
import { urls } from "../../util";

const buttonStyle = css({
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
      href={`mailto:${urls.my.email}`}
      rel="noopener noreferrer"
      variant="contained"
      disableElevation
    >
      Contact
    </Button>
  );
}
