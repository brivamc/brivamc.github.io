/** @jsxImportSource @emotion/react */
import { css, Grid, GridProps, Typography } from "@mui/material";
import React from "react";

interface ContentContainerProps {
  children: React.ReactNode;
  gridProps?: GridProps;
}

const containerStyle = css({
  padding: "10%"
});

/* TODO:
  - include title component
  - will have children
  - style with a decent enough spacing around the content
  - rename to GridContainer?? idk.
*/

export const ContentContainer: React.FC<ContentContainerProps & {
  title?: string;
}> = ({ title, children, gridProps }) => {
  return (
    <Grid container css={containerStyle} spacing={2} {...gridProps}>
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
