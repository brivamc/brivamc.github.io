/** @jsxImportSource @emotion/react */
import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { css, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { formatDate } from "../../util/formatDate";
import { ExperienceHeader } from "./ExperienceHeader";
import { MyJobExperience } from "./experienceText";

const tabsStyle = css({
  "& .MuiTab-wrapped": {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "left",
    textTransform: "none"
  },
  "& .MuiTabs-indicator": {
    left: 0
  },
  minWidth: "20vw",
  height: "100%"
});

const tabPanelStyle = css({
  paddingTop: 0
});

const textStyle = css({
  fontSize: "14px",
  textTransform: "none"
});

export const ExperienceTabs: React.FC<{
  jobExperiences: MyJobExperience[];
  selectedTab: MyJobExperience;
  setSelectedTab: (value: MyJobExperience) => void;
}> = ({ jobExperiences, selectedTab, setSelectedTab }) => {

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: typeof selectedTab) => {
    const found = _.find(jobExperiences, ["employer", newValue]);
    if (!found) {
      return;
    }
    setSelectedTab(found);
  };

  return (
    <TabContext value={selectedTab.employer}>
      <Grid container wrap="nowrap">
        <Grid item>
          <Tabs
            orientation="vertical"
            value={selectedTab.employer}
            onChange={handleTabChange}
            aria-label="My Job Experiences"
            css={tabsStyle}
          >
            {jobExperiences.map(job => (
              <Tab
                key={job.index}
                value={job.employer}
                label={<Typography css={textStyle}>
                  {job.employer}
                </Typography>}
                disableRipple
                wrapped
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item>
          {jobExperiences.map(job => (
            <TabPanel css={tabPanelStyle} key={job.index} value={job.employer}>
              <Grid container>
                <Grid item>
                  <ExperienceHeader experience={selectedTab} />
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
