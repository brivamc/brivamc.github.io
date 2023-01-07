import { ListItem, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText, PaletteMode } from "@mui/material";
import _ from "lodash";
import React from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export const LightDarkModeListItem: React.FC<ListItemButtonProps & {
  mode: PaletteMode;
}> = ({ mode, ...rest }) => {
  return (
    <ListItem>
      <ListItemButton {...rest}>
        <ListItemIcon>
          {mode === "dark" ? <MdOutlineDarkMode /> : <MdLightMode />}
        </ListItemIcon>
        <ListItemText primary={`${_.upperFirst(mode)} Theme`} />
      </ListItemButton>
    </ListItem>
  );
};
