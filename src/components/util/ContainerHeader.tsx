import { Grid, Typography } from "@mui/material";
import React from "react";

export const ContainerHeader: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <Grid container wrap="nowrap" direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Typography fontWeight={600} variant="h4">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}
