import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ContentContainer } from "../../util";

const MY_GITHUB_REPO_LINK = "https://github.com/brivamc?tab=repositories";

const MY_PROJECTS_TEXT = "Check out my Github repo to view my projects including this website!";

export const MyProjects: React.FC = () => {
  return (
    <ContentContainer
      gridProps={{
        direction: "column"
      }}
      title="My Projects"
    >
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6">
            {MY_PROJECTS_TEXT}
          </Typography>
        </Grid>
        <Grid item>
        <Button
          target="_blank"
          href={MY_GITHUB_REPO_LINK}
          variant="outlined"
          disableElevation
        >
          View My Projects
        </Button>
        </Grid>
      </Grid>
    </ContentContainer>
  );
}
