/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import React from "react";
import { css } from "@emotion/react";

interface ContentContainerProps {
  children: React.ReactNode;
}

const containerStyle = css({
  padding: "10%"
});

/* TODO:
  - include title component
  - will have children
  - style with a decent enough spacing around the content
*/

export const ContentContainer: React.FC<ContentContainerProps & {
  title?: string;
}> = ({ title, children }) => {
  return (
    <Grid container css={containerStyle} spacing={2}>
      {title &&
        <Grid item>
          <Typography variant="h6">
            {title}
          </Typography>
        </Grid>}
      <Grid item>
        {children}
      </Grid>
    </Grid>
  );
}
