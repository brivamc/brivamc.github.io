/** @jsxImportSource @emotion/react */
import { css, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, tabsClasses, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { ExperienceHeader } from "./ExperienceHeader";
import { MyJobExperience } from "./experienceText";
import { MdNavigateNext, MdNavigateBefore, MdKeyboardArrowRight } from "react-icons/md";
import _ from "lodash";
import { TabContext, TabPanel } from "@mui/lab";
import { formatDate } from "../../util";
import { ExperienceMenu } from "./ExperienceMenu";

const tabsStyle = css({
  [`& .${tabsClasses.scrollButtons}`]: {
    '&.Mui-disabled': { opacity: 0.3 },
  },
  "& .MuiTab-wrapped": {
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // textAlign: "center",
    textTransform: "none",
    margin: "auto"
  },
  '& .MuiTabs-indicator': {
    display: "none",
  },
  minWidth: "20vw",
  height: "100%"
});

const tabPanelStyle = css({
  paddingTop: 0
});

const mobileTabStyle = css({

  width: "100%",
  minWidth: "fit-content",
  flex: 1,
  textAlign: "center"
});

export const ExperienceTabsMobile: React.FC<{
  jobExperiences: MyJobExperience[];
  selectedTab: MyJobExperience;
  setSelectedTab: (value: MyJobExperience) => void;
}> = ({ jobExperiences, selectedTab, setSelectedTab}) => {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef(null);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
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
      <Grid container direction="column" wrap="nowrap">
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
                  <IconButton onClick={handlePrevClick} disabled={!isPrevClickable}>
                    <MdNavigateBefore />
                  </IconButton>);
              } else if (props.direction === "right") {
                return (
                  <IconButton onClick={handleNextClick} disabled={!isNextClickable}>
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
              css={mobileTabStyle}
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
                        <ListItemText >
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


/*
import { css, IconButton, Tab, Tabs, tabsClasses, Typography } from "@mui/material";
import React from "react";
import { ExperienceHeader } from "./ExperienceHeader";
import { MyJobExperience } from "./experienceText";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import _ from "lodash";

const tabsStyle = css({
  [`& .${tabsClasses.scrollButtons}`]: {
    '&.Mui-disabled': { opacity: 0.3 },
  },
  "& .MuiTab-wrapped": {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "left",
    textTransform: "none"
  },
  '& .MuiTabs-indicator': {
    left: 0,
  },
  minWidth: "20vw"
});

const mobileTabsStyle = css({
  "& .MuiTab-wrapped": {
    margin: "auto"
  },
  '& .MuiTabs-indicator': {
    display: "none"
  }
});

const mobileTabStyle = css({
  
  width: "100%",
  minWidth: "fit-content",
 // flex: 1,
  textAlign: "center"
});

const textStyle = css({
  fontSize: "14px",
  textTransform: "none"
});

export const ExperienceTabMobile: React.FC<{
  jobExperiences: MyJobExperience[];
  selectedTab: MyJobExperience;
  setSelectedTab: (value: MyJobExperience) => void;
  isMobile?: boolean;
}> = ({ jobExperiences, selectedTab, setSelectedTab, isMobile = false }) => {
  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: typeof selectedTab) => {
    const found = _.find(jobExperiences, ["employer", newValue]);
    if (!found) {
      return;
    }
    setSelectedTab(found);
  };
  return (
    <Tabs
      orientation={isMobile ? "horizontal" : "vertical"}
      scrollButtons={isMobile}
      allowScrollButtonsMobile
      value={selectedTab.employer}
      onChange={handleTabChange}
      aria-label="My Job Experiences"
      variant="scrollable"
      css={[tabsStyle, isMobile && mobileTabsStyle]}
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
            <IconButton onClick={handlePrevClick} disabled={!isPrevClickable}>
              <MdNavigateBefore />
            </IconButton>);
        } else if (props.direction === "right") {
          return (
            <IconButton onClick={handleNextClick} disabled={!isNextClickable}>
              <MdNavigateNext />
            </IconButton>);
        } else {
          return (null);
        }
      }}
    >
      {isMobile ?
        <Tab
          wrapped
          css={mobileTabStyle}
          value={selectedTab.employer}
          label={
            <ExperienceHeader justifyContent="center" hideJobTitle experience={selectedTab} increaseFontElement="employer" />
          }
        /> :
        jobExperiences.map(job => (
          <Tab
            disableRipple
            wrapped
            key={job.index}
            value={job.employer}
            label={
              <Typography css={textStyle}>
                {job.employer}
              </Typography>
            }
          />
        ))}
    </Tabs>
  )
};
*/
