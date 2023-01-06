/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import Logo from "../util/images/my-logo.png";
import { AppBar, css, Fade, Grid, PaletteMode, Toolbar } from "@mui/material";
import { NavButton } from "../util/buttons/NavButton";
import { DownloadResumeButton } from "../util/buttons/DownloadResumeButton";
import { LightDarkThemeButton } from "../util/buttons/LightDarkThemeButton";

const logoStyle = css({
  length: "50px",
  width: "50px"
});

interface ButtonNav {
  label: string;
  url: string;
}

const navButtons: ButtonNav[] = [
  {
    label: 'About Me',
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

/*
- add classnames to elements (navbar-container, navbar-logo, nav-links, nav-menu, nav-menu-active, nav-item, etc)
- nav button component for about me, experience, projects, and contact (possibly resume too but idk, might be its own)
*/

export const Navbar: React.FC<{
  mode: PaletteMode;
  onModeClick: () => void;
}> = ({ mode, onModeClick }) => {
  const [selected, setSelected] = useState("");

  const handleClick = (selectedHash: string) => {
    setSelected(selectedHash);
  };
  
  return (
    <>
      <AppBar color="inherit" elevation={0} enableColorOnDark>
        <Toolbar>
          <Grid justifyContent="space-between" alignItems="center" container>
            <Grid item>
              <a href="/">
                <img alt="my-headshot" css={logoStyle} src={Logo} />
              </a>
            </Grid>
            <Grid item>
              <Fade in timeout={1000}>
                <Grid container spacing={1}>
                  {navButtons.map(({ label, url }) =>
                    <Grid key={label} item>
                      <NavButton isSelected={selected === url} onClick={() => handleClick(url)} url={url}>
                        {label}
                      </NavButton>
                    </Grid>
                  )}
                  <Grid item>
                    <DownloadResumeButton />
                  </Grid>
                  <Grid item>
                    <LightDarkThemeButton mode={mode} onClick={onModeClick} />
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
