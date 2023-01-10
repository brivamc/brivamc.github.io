/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import React from "react";
import { ContentContainer } from "../../components/util";
import { MailToButton } from "../../components/buttons";
import { css } from "@emotion/react";
import { PortfolioPageProps } from "../../types/pages";

const CONTACT_SUBTITLE = "Contact Me!";
const CONTACT_DESCRIPTION = `My inbox is open if you have any questions, suggestions, or just want to say hi!
I'll try to get back to you in a timely manner :)`;

const gridStyle = css({
  paddingTop: "20%"
});

const textStyle = css({
  whiteSpace: "pre-line"
});

export const ContactPage: React.FC<PortfolioPageProps> = ({
  isMobile
}) => {
  return (
    <ContentContainer isMobile={isMobile} container justifyContent="center" alignItems="center">
      <Grid css={gridStyle} container direction="column" spacing={4} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography align="center" fontWeight={600} variant="h2">
            {CONTACT_SUBTITLE}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center" css={textStyle}>
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
