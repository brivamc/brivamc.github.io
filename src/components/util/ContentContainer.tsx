/** @jsxImportSource @emotion/react */
import { css, Grid, GridProps } from "@mui/material";
import React from "react";
import { TitleHeader } from "./TitleHeader";

interface ContentContainerProps {
  children: React.ReactNode;
  gridProps?: GridProps;
}

const containerStyle = css({
  paddingTop: "10%",
  paddingBottom: "5%",
  paddingLeft: "20%",
  paddingRight: "20%"
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
    <Grid container css={containerStyle} spacing={3} {...gridProps}>
      {title &&
        <Grid item>
          <TitleHeader title={title} />
        </Grid>}
      <Grid item>
        {children}
      </Grid>
    </Grid>
  );
}
