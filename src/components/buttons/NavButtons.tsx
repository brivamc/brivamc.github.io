import { Grid, PaletteMode } from "@mui/material";
import React, { useState } from "react";

import { ButtonNav } from "../layout";
import { DownloadResumeButton, LightDarkThemeButton, NavButton } from ".";

export const NavButtons: React.FC<{
  navButtons: ButtonNav[];
  mode: PaletteMode;
  onModeClick: () => void;
}> = ({ navButtons, mode, onModeClick }) => {
  const [selected, setSelected] = useState("");

  const handleClick = (selectedHash: string) => {
    setSelected(selectedHash);
  };

  return (
    <Grid container spacing={1}>
      {navButtons.map(({ label, url }) => (
        <Grid key={label} item>
          <NavButton
            isSelected={selected === url} onClick={() => {
              handleClick(url); 
            }} url={url}
          >
            {label}
          </NavButton>
        </Grid>
      )
      )}
      <Grid item>
        <DownloadResumeButton />
      </Grid>
      <Grid item>
        <LightDarkThemeButton mode={mode} onClick={onModeClick} />
      </Grid>
    </Grid>
  );
};
