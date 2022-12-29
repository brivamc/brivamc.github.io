/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import React from "react";
import { ContentContainer } from "../../util";
import Headshot from "./bree-headshot.jpg";
import { css } from "@emotion/react";
import { aboutTechnologiesText, aboutText, myTechnologies } from "./aboutMeText";
import { DevTechnologyButton } from "../../util/DevTechnologyButton";

const imgStyle = css({
  maxWidth: "40wv",
  maxHeight: "40vh"
});

const textStyle = css({
  whiteSpace: "pre-line"
});

const techContainerStyle = css({
  maxWidth: "25vw"
});

/* TODO: Change how the container wraps when in mobile mode */

export const AboutMe: React.FC = () => {
  const title = "About Me";
  return (
    <ContentContainer title={title}>
      <Grid container wrap="nowrap" spacing={4} justifyContent="space-between" direction="row-reverse">
        <Grid item>
          <img css={imgStyle} src={Headshot} />
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction="column" justifyContent="space-around">
            <Grid item>
              <Typography css={textStyle} display="block">
                {aboutText}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {aboutTechnologiesText}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1} css={techContainerStyle}>
                {myTechnologies.map(tech => (
                  <Grid key={tech.name} item>
                    <DevTechnologyButton tech={tech} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContentContainer>
  );
}
