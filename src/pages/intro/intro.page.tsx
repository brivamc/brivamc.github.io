/** @jsxImportSource @emotion/react */
import { css, Fade, Grid, Slide, Typography } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { SocialButtons } from "../../components/buttons";
import { ContentContainer, TextCarousel } from "../../components/util";
import { PortfolioPageProps } from "../../types/pages";

const INTRO_TEXT = "Hello, my name is";

const ABOUT_TEXT = "I am a";

const MY_FIRST_NAME = "Bree";

const MY_LAST_NAME = "McCausland";

const aboutMeList = [
  "full-stack developer 💻",
  "dreamer ☁️",
  "video game enthusiast 🎮",
  "lover of all things tech 📱",
  "cat lover 🐈"
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

const mobileAboutTextStyle = css({
  fontSize: "20px"
});

const nameTextStyle = css({
  fontSize: "130px"
});

const mdNameTextStyle = css({
  fontSize: "100px"
});

const mobileNameTextStyle = css({
  fontSize: "70px"
});

const gridStyle = css({
  paddingTop: "1%"
});

const containerMdStyle = css({
  marginTop: "5%",
  marginBottom: "20%"
});

const containerMobileStyle = css({
  marginTop: "15%",
  marginBottom: "30%"
});

export const IntroPage: React.FC<PortfolioPageProps> = ({
  isMobile
}) => {
  const containerRef = useRef(null);

  return (
    <ContentContainer
      sx={[
        (theme) => ({
          [theme.breakpoints.between("sm", "md")]: containerMdStyle
        })
      ]}
      css={isMobile && containerMobileStyle}
      isMobile={isMobile}
      justifyContent="start"
    >
      <Grid ref={containerRef} container css={gridStyle} direction="column" spacing={1}>
        <Slide in direction="right" container={containerRef.current} timeout={1000}>
          <Grid item>
            <Typography
              css={[textStyle, introTextStyle]}
              variant="overline"
              >
                {INTRO_TEXT}
            </Typography>
          </Grid>
        </Slide>
        <Slide in direction="down" container={containerRef.current} timeout={1000}>
          <Grid item>
            <Typography
              css={isMobile && mobileNameTextStyle}
              sx={[
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: mdNameTextStyle,
                  [theme.breakpoints.up("md")]: nameTextStyle
                })
              ]}
              color="primary"
              fontWeight={600}
              variant="h1"
            >
                {MY_FIRST_NAME}
            </Typography>
          </Grid>
        </Slide>
        <Slide in direction="down" container={containerRef.current} timeout={1000}>
          <Grid item>
            <Typography
              css={isMobile && mobileNameTextStyle}
              sx={[
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: mdNameTextStyle,
                  [theme.breakpoints.up("md")]: nameTextStyle
                })
              ]}
              color="secondary"
              fontWeight={600}
              variant="h1"
            >
              {MY_LAST_NAME}
            </Typography>
          </Grid>
        </Slide>
        <Fade in timeout={1000}>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Typography
                  css={isMobile ? [textStyle, mobileAboutTextStyle] : [textStyle, aboutTextStyle]}
                  variant="overline"
                >
                  {ABOUT_TEXT}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  &nbsp;
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  css={isMobile ? [textStyle, mobileAboutTextStyle] : [textStyle, aboutTextStyle]}
                  variant="overline"
                  component="span"
                  color="primary"
                >
                  <TextCarousel list={aboutMeList} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
        <Slide in direction="right" container={containerRef.current} timeout={500}>
          <Grid item>
            <SocialButtons size={isMobile ? "medium" : "large"} alignButtons={isMobile ? "start" : "end"} />
          </Grid>
        </Slide>
      </Grid>
    </ContentContainer>
  );
}
