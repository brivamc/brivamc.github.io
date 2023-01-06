/** @jsxImportSource @emotion/react */
import { css, Fade, Grid, Slide, Typography } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { ContentContainer, SocialButtons, TextCarousel } from "../../util";

const INTRO_TEXT = "Hi, my name is";

const ABOUT_TEXT = "I am a";

const MY_FIRST_NAME = "Bree";

const MY_LAST_NAME = "McCausland";

const aboutMeList = [
  "dreamer",
  "video game enthusiast",
  "lover of all things tech",
  "cat lover",
  "full-stack developer"
];

const textStyle = css({
  textTransform: "none",
});

const introTextStyle = css({
  fontSize: "18px"
});

const aboutTextStyle = css({
  fontSize: "25px"
});

const nameTextStyle = css({
  fontSize: "130px"
});

const gridStyle = css({
  paddingTop: "1%"
});

export const MainSummary: React.FC = () => {
  const containerRef = useRef(null);

  return (
    <ContentContainer justifyContent="start">
      <Grid ref={containerRef} container css={gridStyle} direction="column" spacing={1}>
        <Slide in direction="right" container={containerRef.current} timeout={1000}>
          <Grid item>
            <Typography css={[textStyle, introTextStyle]} variant="overline">{INTRO_TEXT}</Typography>
          </Grid>
        </Slide>
        <Slide in direction="down" container={containerRef.current} timeout={1000}>
          <Grid item>
            <Typography css={nameTextStyle} color="primary" fontWeight={600} variant="h1">{MY_FIRST_NAME}</Typography>
          </Grid>
        </Slide>
        <Slide in direction="down" container={containerRef.current} timeout={1000}>
          <Grid item>
            <Typography css={nameTextStyle} color="secondary" fontWeight={600} variant="h1">{MY_LAST_NAME}</Typography>
          </Grid>
        </Slide>
        <Fade in timeout={1000}>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Typography css={[textStyle, aboutTextStyle]} variant="overline">
                  {ABOUT_TEXT}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  &nbsp;
                </Typography>
              </Grid>
              <Grid item>
                <Typography css={[textStyle, aboutTextStyle]} variant="overline" component="span" color="primary">
                  <TextCarousel list={aboutMeList} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
        <Slide in direction="right" container={containerRef.current} timeout={500}>
          <Grid item>
            <SocialButtons />
          </Grid>
        </Slide>
      </Grid>
    </ContentContainer>
  );
}
