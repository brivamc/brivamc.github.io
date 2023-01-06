/** @jsxImportSource @emotion/react */
import { css, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { ContentContainer, url } from "../../util";
import Headshot from "../../util/images/bree-headshot.jpg";
import { aboutTechnologiesText, myTechnologies } from "./aboutMeText";
import { DevTechnologyButton } from "../../util/buttons/DevTechnologyButton";

const imgStyle = css({
  maxWidth: "40wv",
  maxHeight: "40vh"
});

const linkStyle = css({
  fontWeight: 600
});

const textStyle = css({
  whiteSpace: "pre-line",
  wordWrap: "break-word"
});

const techContainerStyle = css({
  maxWidth: "35vw"
});

const makeHyperlink = (text: string, link: string) => (<Link css={linkStyle} underline="hover" href={link} rel="noopener noreferrer" target="_blank">{text}</Link>);

export const AboutMe: React.FC = () => {
  const title = "About Me";
  return (
    <ContentContainer title={title}>
      <Grid container wrap="nowrap" spacing={4} justifyContent="space-between" direction="row-reverse">
        <Grid item>
          <img alt="my-headshot" css={imgStyle} src={Headshot} />
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction="column" justifyContent="space-around">
            <Grid item>
              <Typography css={textStyle}>
                Hi! My name is Bree, and I enjoy creating and building websites and web applications.
                I was first interested in programming in 2013 when my friends and I would create small games and programs for fun.
                That, coupled with my interest in editing custom CSS and HTML themes on MySpace, Tumblr, and IMVU, eventually evolved into developing websites and applications on the web.
                Since I was six years old, I've been intrigued by computers, and my passion for them has only grown stronger.
              </Typography>
            </Grid>
            <Grid item>
              <Typography css={textStyle}>
                Recently, I've had the privilege of working at an {makeHyperlink("RV trip planning service", url.job.rvLife)}, a {makeHyperlink("website and IT company", url.job.fineLine)},
                and a {makeHyperlink("cybersecurity start-up", url.job.hyperqube)}. Now, I'm seeking new challenges and exploring new opportunities in my career!
              </Typography>
            </Grid>
            <Grid item>
              <Typography css={textStyle}>
                Lately I've been working with TypeScript and the React library, and I've been having a lot of fun with it! As a matter of fact, this website was built with React!
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {aboutTechnologiesText}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2} css={techContainerStyle}>
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
