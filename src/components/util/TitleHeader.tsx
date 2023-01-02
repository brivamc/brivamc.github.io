/** @jsxImportSource @emotion/react */
import { css, Grid, Typography } from "@mui/material";
import React from "react";

const lineStyle = css({
  height: "1px",
  backgroundColor: "white",
  //flexGrow: 1,
  width: "100%",
  //borderTop: "1px white",
  //height: ".5px",
  marginRight: "10vw",
});

export const TitleHeader: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <Grid container wrap="nowrap" direction="row" spacing={2} alignItems="center">
      <Grid item>
        <div css={lineStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h4">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <div css={lineStyle} />
      </Grid>
    </Grid>
  );
}
