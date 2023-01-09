/** @jsxImportSource @emotion/react */
import { css, Grid, GridProps } from "@mui/material";
import React from "react";
import { ContainerHeader } from ".";

interface ContentContainerProps {
  children: React.ReactNode;
}

const containerStyle = css({
  paddingTop: "8%",
  paddingBottom: "8%",
  paddingLeft: "15%",
  paddingRight: "15%"
});

const mobileContainerStyle = css({
  paddingTop: "15%",
  paddingBottom: "15%",
  paddingLeft: "6%",
  paddingRight: "6%"
});

const gridTitleStyle = css({
  align: "left",
  textAlign: "left"
});

export const ContentContainer: React.FC<GridProps & ContentContainerProps & {
  title?: string;
  isMobile?: boolean;
}> = ({ title, isMobile = false, children, ...rest }) => {
  return (
    <Grid container alignItems="center" css={isMobile ? mobileContainerStyle : containerStyle} spacing={3} {...rest}>
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
