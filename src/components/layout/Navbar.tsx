import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

/* TODO makestyles deprecated, use emotion instead */
/*
const useStyles = makeStyles({
  appBar: {
    zIndex: 1300,
    backgroundColor: theme.palette.primary[800],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toolbar: {
    paddingLeft: theme.spacing(4)
  },
  menuContainer: {
    paddingRight: theme.spacing(10)
  }
});

add classnames to elements (navbar-container, navbar-logo, nav-links, nav-menu, nav-menu-active, nav-item, etc)
*/

export const Navbar: React.FC = () => {
  return (
    <>
      <AppBar color="inherit" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div">
            navbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
