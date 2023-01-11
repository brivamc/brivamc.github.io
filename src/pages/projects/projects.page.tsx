/** @jsxImportSource @emotion/react */
import { Button, css, Grid, Typography } from "@mui/material";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

import { ContentContainer } from "../../components/util";
import { PortfolioPageProps } from "../../types/pages";
import { urls } from "../../util";

const buttonStyle = css({
  height: "3em",
  fontSize: "30px",
  padding: "20px",
  paddingLeft: "30px",
  paddingRight: "30px"
});

const MY_PROJECTS_TEXT = "Check out my Github repo to view my projects including this website!";

export const ProjectsPage: React.FC<PortfolioPageProps> = ({
  isMobile = false
}) => {
  return (
    <ContentContainer
      isMobile={isMobile}
      direction="column"
      title="My Projects"
    >
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item>
          <Typography align="center" variant="h5">
            {MY_PROJECTS_TEXT}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            endIcon={<FiExternalLink size={25} />}
            css={buttonStyle}
            aria-label="view my projects"
            target="_blank"
            rel="noopener noreferrer"
            href={urls.my.github.repo}
            variant="outlined"
            disableElevation
          >
            View Projects
          </Button>
        </Grid>
      </Grid>
    </ContentContainer>
  );
};
