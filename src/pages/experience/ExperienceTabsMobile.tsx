/** @jsxImportSource @emotion/react */
import { TabContext, TabPanel } from "@mui/lab";
import { css, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, tabsClasses, TabScrollButtonProps, Typography } from "@mui/material";
import _ from "lodash";
import React, { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import { formatDate } from "../../util";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceMenu } from "./ExperienceMenu";
import { MyJobExperience } from "./experienceText";

/* TODO: condense in some way? */

const tabsStyle = css({
  [`& .${tabsClasses.scrollButtons}`]: {
    "&.Mui-disabled": { opacity: 0.3 }
  },
  "& .MuiTab-wrapped": {
    textTransform: "none",
    margin: "auto"
  },
  "& .MuiTabs-indicator": {
    display: "none"
  },
  minWidth: "20vw"
});

const tabPanelStyle = css({
  paddingTop: 0
});

const mobileTabStyle = css({
  width: "100%",
  minWidth: "fit-content",
  flex: 1,
  textAlign: "center",
  borderRadius: "8px"
});

const tabButtonStyle = css({
  border: "2px solid"
});

const tabButtonStyleSelected = css({
  border: "2px dashed"
});

export const ExperienceTabsMobile: React.FC<{
  jobExperiences: MyJobExperience[];
  selectedTab: MyJobExperience;
  setSelectedTab: (value: MyJobExperience) => void;
}> = ({ jobExperiences, selectedTab, setSelectedTab }) => {
  const [open, setOpen] = useState(false);
  const [isTabSelected, setIsTabSelected] = useState(false);
  const anchorEl = useRef(null);

  const handleMenuOpen = () => {
    setOpen(() => {
      setIsTabSelected(true);
      return true;
    });
  };

  const handleMenuClose = () => {
    setOpen(() => {
      setIsTabSelected(false);
      return false;
    });
  };

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: typeof selectedTab) => {
    const found = _.find(jobExperiences, ["employer", newValue]);
    if (!found) {
      return;
    }
    setSelectedTab(found);
  };

  return (
    <TabContext value={selectedTab.employer}>
      <Grid container direction="column" wrap="nowrap" spacing={3}>
        <Grid item>
          <Tabs
            orientation="horizontal"
            scrollButtons
            allowScrollButtonsMobile
            value={selectedTab.employer}
            onChange={handleTabChange}
            aria-label="My Job Experiences"
            variant="scrollable"
            css={tabsStyle}
            ScrollButtonComponent={(props: TabScrollButtonProps) => {
              const currentIndex = _.findIndex(jobExperiences, selectedTab);
              const isNextClickable = jobExperiences.includes(jobExperiences[currentIndex + 1]);
              const isPrevClickable = jobExperiences.includes(jobExperiences[currentIndex - 1]);
              const handleNextClick = () => {
                if (!isNextClickable) {
                  return;
                }
                setSelectedTab(jobExperiences[currentIndex + 1]);
              };
            
              const handlePrevClick = () => {
                if (!isPrevClickable) {
                  return;
                }
                setSelectedTab(jobExperiences[currentIndex - 1]);
              };
              if (props.direction === "left") {
                return (
                  <IconButton aria-label="go to previous experience" onClick={handlePrevClick} disabled={!isPrevClickable}>
                    <MdNavigateBefore />
                  </IconButton>
                );
              } else {
                return (
                  <IconButton aria-label="go to next experience" onClick={handleNextClick} disabled={!isNextClickable}>
                    <MdNavigateNext />
                  </IconButton>
                );
              }
            }}
          >
            <Tab
              onClick={handleMenuOpen}
              ref={anchorEl}
              wrapped
              css={[mobileTabStyle, isTabSelected ? tabButtonStyleSelected : tabButtonStyle]}
              value={selectedTab.employer}
              label={<ExperienceHeader justifyContent="center" hideJobTitle experience={selectedTab} increaseFontElement="employer" />}
            />
          </Tabs>
          <ExperienceMenu
            anchorEl={anchorEl}
            isOpen={open}
            onClose={handleMenuClose}
            jobExperiences={jobExperiences}
            setSelectedTab={setSelectedTab}
          />
        </Grid>
        <Grid item>
          {jobExperiences.map(job => (
            <TabPanel css={tabPanelStyle} key={job.index} value={job.employer}>
              <Grid container>
                <Grid item>
                  <ExperienceHeader hideEmployer experience={selectedTab} />
                  <Typography fontWeight={600} variant="caption">
                    {`${formatDate(job.startDate)} - ${job.endDate ? formatDate(job.endDate) : "Present"}`}
                  </Typography>
                </Grid>
                <Grid item>
                  <List>
                    {job.jobDetails.map(jd => (
                      <ListItem disablePadding key={jd}>
                        <ListItemIcon>
                          <MdKeyboardArrowRight />
                        </ListItemIcon>
                        <ListItemText>
                          {jd}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </TabContext>
  );
};
