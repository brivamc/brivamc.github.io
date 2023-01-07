import React from "react";
import MenuItem from '@mui/material/MenuItem';
import { MyJobExperience } from "./experienceText";
import { ClickAwayListener, Grow, MenuList, Paper, Popper, useTheme } from "@mui/material";
import _ from "lodash";
import { themePalette } from "../../layout/theme";

/*
TODO: custom prop for menu paper in theme

*/

export const ExperienceMenu: React.FC<{
  anchorEl: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
  jobExperiences: MyJobExperience[];
  setSelectedTab: (value: MyJobExperience) => void;
}> = ({ anchorEl, isOpen, onClose, jobExperiences, setSelectedTab }) => {
  const theme = useTheme();

  const handleClose = () => {
    onClose();
  };

  const handleClickAway = () => {
    handleClose();
  };

  const handleMenuClick = (value: MyJobExperience["employer"]) => {
    const found = _.find(jobExperiences, ["employer", value]);
    if (!found) {
      handleClose();
      return;
    }
    handleClose();
    setSelectedTab(found);
  };

  return (
    <Popper
      open={isOpen}
      placement="bottom"
      anchorEl={anchorEl?.current}
      transition
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
        >
          <Paper
            sx={theme.palette.mode === "light" ? {
              backgroundColor: themePalette.pink[300]
            } : {
              backgroundColor: themePalette.gray[800]
            }}
            elevation={0}
          >
            <ClickAwayListener onClickAway={handleClickAway}>
              <MenuList autoFocusItem={isOpen}>
                {jobExperiences.map(job =>
                  <MenuItem
                    onClick={() => handleMenuClick(job.employer)}
                    key={job.index}
                  >
                    {job.employer}
                  </MenuItem>
                )}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
