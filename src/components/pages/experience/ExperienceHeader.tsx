/** @jsxImportSource @emotion/react */
import { css, Grid, Typography } from "@mui/material";
import React from "react";

const textStyle = css({
  fontSize: "20px",
  fontWeight: 600
});

export const ExperienceHeader: React.FC<{
  jobTitle: string;
  employer: string;
}> = ({ jobTitle: title, employer }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
      <Typography css={textStyle} color="primary">
        {title}
      </Typography>
      </Grid>
      <Grid item>
      <Typography css={textStyle} color="secondary">
        {`@ ${employer}`}
      </Typography>
      </Grid>
    </Grid>
  );
}
