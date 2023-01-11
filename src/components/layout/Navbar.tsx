/** @jsxImportSource @emotion/react */
import { AppBar, css, Fade, Grid, PaletteMode, Toolbar } from "@mui/material";
import React from "react";

import LogoLight from "../../assets/images/my-logo-light.png";
import LogoDark from "../../assets/images/my-logo-dark.png";
import { NavButtons } from "../buttons";
import { NavbarMenu } from "./NavbarMenu";

const logoStyle = css({
  length: "64px",
  width: "64px"
});

export interface ButtonNav {
  label: string;
  url: string;
}

const navButtons: ButtonNav[] = [
  {
    label: "About Me",
    url: "/#about"
  },
  {
    label: "Experience",
    url: "/#experience"
  },
  {
    label: "Projects",
    url: "/#projects"
  },
  {
    label: "Contact",
    url: "/#contact"
  }
];

export const Navbar: React.FC<{
  isMobile?: boolean;
  mode: PaletteMode;
  onModeClick: () => void;
}> = ({ isMobile = false, mode, onModeClick }) => {
  return (
    <>
      <AppBar color="inherit" elevation={0} enableColorOnDark>
        <Toolbar>
          <Grid justifyContent="space-between" alignItems="center" container>
            <Grid item>
              <a href="/">
                <img alt="my-logo" css={logoStyle} src={mode === "light" ? LogoLight : LogoDark} />
              </a>
            </Grid>
            <Grid item>
              <Fade in timeout={1000}>
                {isMobile ?
                  <Grid>
                    <NavbarMenu mode={mode} onModeClick={onModeClick} navButtons={navButtons} />
                  </Grid> :
                  <Grid>
                    <NavButtons mode={mode} onModeClick={onModeClick} navButtons={navButtons} />
                  </Grid>}
              </Fade>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
