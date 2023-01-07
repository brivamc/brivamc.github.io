/** @jsxImportSource @emotion/react */
import { Button, css, Grid, Typography } from "@mui/material";
import React from "react";
import { ContentContainer } from "../../util";
import { url } from "../../util";
import { FiExternalLink } from "react-icons/fi";

const buttonStyle = css({
  height: "3em",
  fontSize: "30px",
  padding: "20px",
  paddingLeft: "30px",
  paddingRight: "30px"
});

const MY_PROJECTS_TEXT = "Check out my Github repo to view my projects including this website!";

export const MyProjects: React.FC = () => {
  return (
    <ContentContainer
      direction="column"
      title="My Projects"
    >
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item>
          <Typography align="center" variant="h6">
            {MY_PROJECTS_TEXT}
          </Typography>
        </Grid>
        <Grid item>
        <Button
          endIcon={
            <FiExternalLink size={25} />
          }
          css={buttonStyle}
          target="_blank"
          rel="noopener noreferrer"
          href={url.my.github.repo}
          variant="outlined"
          disableElevation
        >
          View Projects
        </Button>
        </Grid>
      </Grid>
    </ContentContainer>
  );
}
