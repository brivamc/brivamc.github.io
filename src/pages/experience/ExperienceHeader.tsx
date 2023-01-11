/** @jsxImportSource @emotion/react */
import { css, Grid, GridProps, Typography } from "@mui/material";
import React from "react";

import { MyJobExperience } from "./experienceText";

const textStyle = css({
  fontSize: "20px",
  fontWeight: 600
});

const textStyleFontLarge = css({
  fontSize: "28px",
  fontWeight: 600
});

type ExperienceLabel = "jobTitle" | "employer";

export const ExperienceHeader: React.FC<GridProps & {
  experience: Pick<MyJobExperience, "jobTitle" | "employer">;
  increaseFontElement?: ExperienceLabel;
  hideJobTitle?: boolean;
  hideEmployer?: boolean;
}> = ({
  experience: { jobTitle: title, employer },
  hideJobTitle = false,
  hideEmployer = false,
  increaseFontElement,
  ...rest
}) => {
  return (
    <Grid container spacing={1} {...rest}>
      {!hideJobTitle &&
        <Grid item>
          <Typography css={[textStyle, increaseFontElement === "jobTitle" && textStyleFontLarge]} color="primary">
            {title}
          </Typography>
        </Grid>}
      {!hideEmployer &&
        <Grid item>
          <Typography css={[textStyle, increaseFontElement === "employer" && textStyleFontLarge]} color="secondary">
            {!hideJobTitle && "@ "}
            {`${employer}`}
          </Typography>
        </Grid>}
    </Grid>
  );
};
