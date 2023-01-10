/** @jsxImportSource @emotion/react */
import { css, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, tabsClasses, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { ExperienceHeader } from "./ExperienceHeader";
import { MyJobExperience } from "./experienceText";
import { MdNavigateNext, MdNavigateBefore, MdKeyboardArrowRight } from "react-icons/md";
import _ from "lodash";
import { TabContext, TabPanel } from "@mui/lab";
import { ExperienceMenu } from "./ExperienceMenu";
import { formatDate } from "../../util";

/* TODO: condense in some way? */

const tabsStyle = css({
  [`& .${tabsClasses.scrollButtons}`]: {
    '&.Mui-disabled': { opacity: 0.3 }
  },
  "& .MuiTab-wrapped": {
    textTransform: "none",
    margin: "auto"
  },
  '& .MuiTabs-indicator': {
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
}> = ({ jobExperiences, selectedTab, setSelectedTab}) => {
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
            ScrollButtonComponent={(props) => {
              const currentIndex = _.findIndex(jobExperiences, selectedTab);
              const isNextClickable = currentIndex !== -1 && jobExperiences[currentIndex + 1] !== undefined;
              const isPrevClickable = currentIndex !== -1 && jobExperiences[currentIndex - 1] !== undefined;
            
              const handleNextClick = () => {
                if (!isNextClickable) {
                  return;
                }
                return setSelectedTab(jobExperiences[currentIndex + 1]);
              };
            
              const handlePrevClick = () => {
                if (!isPrevClickable) {
                  return;
                }
                return (setSelectedTab(jobExperiences[currentIndex - 1]));
              };
              if (props.direction === "left") {
                return (
                  <IconButton aria-label="go to previous experience" onClick={handlePrevClick} disabled={!isPrevClickable}>
                    <MdNavigateBefore />
                  </IconButton>);
              } else if (props.direction === "right") {
                return (
                  <IconButton aria-label="go to next experience" onClick={handleNextClick} disabled={!isNextClickable}>
                    <MdNavigateNext />
                  </IconButton>);
              } else {
                return (null);
              }
            }}
          >
            <Tab
              onClick={handleMenuOpen}
              ref={anchorEl}
              wrapped
              css={[mobileTabStyle, isTabSelected ? tabButtonStyleSelected : tabButtonStyle]}
              value={selectedTab.employer}
              label={
                <ExperienceHeader justifyContent="center" hideJobTitle experience={selectedTab} increaseFontElement="employer" />
              }
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
