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
  "lover of all things tech 📱",
  "video game enthusiast 🎮",
  "cat lover 🐈",
  "dreamer ☁️"
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

const xlNameTextStyle = css({
  fontSize: "10rem"
});

const lgNameTextStyle = css({
  fontSize: "8rem"
});

const mdNameTextStyle = css({
  fontSize: "6rem"
});

const smNameTextStyle = css({
  fontSize: "3.5rem"
});

const xsNameTextStyle = css({
  fontSize: "2rem"
});

const gridStyle = css({
  paddingTop: "1%"
});

const containerMdStyle = css({
  marginTop: "5%",
  marginBottom: "20%"
});

const containerMobileStyle = css({
  marginTop: "10%",
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
              sx={[
                (theme) => ({
                  [theme.breakpoints.only("xs")]: xsNameTextStyle,
                  [theme.breakpoints.between("xs", "sm")]: smNameTextStyle,
                  [theme.breakpoints.between("sm", "md")]: mdNameTextStyle,
                  [theme.breakpoints.between("md", "lg")]: lgNameTextStyle,
                  [theme.breakpoints.up("lg")]: xlNameTextStyle,
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
              sx={[
                (theme) => ({
                  [theme.breakpoints.only("xs")]: xsNameTextStyle,
                  [theme.breakpoints.between("xs", "sm")]: smNameTextStyle,
                  [theme.breakpoints.between("sm", "md")]: mdNameTextStyle,
                  [theme.breakpoints.between("md", "lg")]: lgNameTextStyle,
                  [theme.breakpoints.up("lg")]: xlNameTextStyle,
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
