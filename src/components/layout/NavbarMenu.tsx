/** @jsxImportSource @emotion/react */
import { css, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, PaletteMode } from "@mui/material";
import React, { useState } from "react";
import { ButtonNav } from ".";
import { DownloadResumeListItem, LightDarkModeListItem } from "../util/list";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const containerStyle = css({
  height: "100%"
});

const closeButtonStyle = css({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "16px"
});

export const NavbarMenu: React.FC<{
  navButtons: ButtonNav[];
  mode: PaletteMode;
  onModeClick: () => void;
}> = ({ navButtons, mode, onModeClick }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerClick = () => {
    return setOpen(prev => !prev);
  };

  const handleDrawerClose = () => {
    return setOpen(false);
  }

  return (
    <>
      <IconButton onClick={handleDrawerClick}>
        <FiMenu />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Grid container direction="column" css={containerStyle} justifyContent="space-between">
          <Grid item>
            <List>
              <ListItem disablePadding css={closeButtonStyle}>
                <IconButton onClick={handleDrawerClose}>
                  <MdClose />
                </IconButton>
              </ListItem>
              {navButtons.map(({ label, url }) =>
                <ListItem key={label}>
                  <ListItemButton onClick={handleDrawerClose} href={url}>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Grid>
          <Grid item>
            <List>
              <Divider light />
              <DownloadResumeListItem />
              <LightDarkModeListItem mode={mode} onClick={onModeClick} />
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
