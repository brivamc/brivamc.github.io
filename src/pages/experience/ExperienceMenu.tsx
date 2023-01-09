import React from "react";
import MenuItem from '@mui/material/MenuItem';
import { MyJobExperience } from "./experienceText";
import { ClickAwayListener, Grow, MenuList, Paper, Popper } from "@mui/material";
import _ from "lodash";
import { themePalette } from "../../components/layout/theme";

export const ExperienceMenu: React.FC<{
  anchorEl: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
  jobExperiences: MyJobExperience[];
  setSelectedTab: (value: MyJobExperience) => void;
}> = ({ anchorEl, isOpen, onClose, jobExperiences, setSelectedTab }) => {

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
            sx={[
              (theme) => ({
                backgroundColor: theme.palette.mode === "light" ? themePalette.pink[300] : themePalette.gray[800]
              })
            ]}
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
