/** @jsxImportSource @emotion/react */
import { css, Grid, GridProps, useMediaQuery, useTheme } from "@mui/material";
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
  paddingTop: "10%",
  paddingBottom: "10%",
  paddingLeft: "6%",
  paddingRight: "6%"
});

const gridTitleStyle = css({
  align: "left",
  textAlign: "left"
});

export const ContentContainer: React.FC<GridProps & ContentContainerProps & {
  title?: string;
}> = ({ title, children, ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

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
