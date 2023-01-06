/** @jsxImportSource @emotion/react */
import { css, Grid, GridProps } from "@mui/material";
import React from "react";
import { ContainerHeader } from ".";

interface ContentContainerProps {
  children: React.ReactNode;
}

const containerStyle = css({
  paddingTop: "10%",
  paddingBottom: "10%",
  paddingLeft: "15%",
  paddingRight: "15%"
});

const gridTitleStyle = css({
  align: "left",
  textAlign: "left"
});

export const ContentContainer: React.FC<GridProps & ContentContainerProps & {
  title?: string;
}> = ({ title, children, ...rest }) => {
  return (
    <Grid container alignItems="center" css={containerStyle} spacing={3} {...rest}>
      {title &&
        <Grid css={gridTitleStyle} item>
          <ContainerHeader title={title} />
        </Grid>}
      <Grid item>
        <Grid justifyContent="center" container>
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
