/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import React from "react";
import { ContentContainer } from "../../util";
import { MailToButton } from "../../util/buttons";
import { css } from "@emotion/react";

const CONTACT_SUBTITLE = "Reach Out!";
const CONTACT_DESCRIPTION = `My inbox is open if you have any questions, suggestions, or just want to say hi!
I'll try to get back to you in a timely manner :)`;

const gridStyle = css({
  width: "45vw"
});

const textStyle = css({
  whiteSpace: "pre-line"
});

export const ContactMe: React.FC = () => {
  return (
    <ContentContainer container justifyContent="center" alignItems="center">
      <Grid css={gridStyle} container direction="column" spacing={4 } justifyContent="center" alignItems="center">
        <Grid item>
          <Typography fontWeight={600} variant="h2">
            {CONTACT_SUBTITLE}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" align="center" css={textStyle}>
            {CONTACT_DESCRIPTION}
          </Typography>
        </Grid>
        <Grid item>
          <MailToButton />
        </Grid>
      </Grid>
    </ContentContainer>
  );
}
