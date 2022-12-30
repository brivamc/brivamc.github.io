/** @jsxImportSource @emotion/react */
import { Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { ContentContainer } from "../../util";
import { MyJobExperience, myJobExperiences } from "./experienceText";
import { TabPanel } from "@mui/lab";
import { css } from "@emotion/react";
import TabContext from "@mui/lab/TabContext";
import { formatDate } from "../../util/formatDate";
import { MdKeyboardArrowRight } from "react-icons/md";

/* TODO: CREATE REUSABLE COMPONENTS
    - component for tabs (implement mobile friendly as well (isMobile?)!!)
    - component for list (possibly need mobile friendly version?)
*/

const tabsStyle = css({
  "& .MuiTab-wrapped": {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "left",
    textTransform: "none"
  },
  '& .MuiTabs-indicator': {
    left: 0
  },
  minWidth: "20vw",
  height: "100%"
});

const tabPanelStyle = css({
  paddingTop: 0
});

export const MyExperience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<MyJobExperience["employer"]>(myJobExperiences[0].employer);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: typeof selectedTab) => {
    setSelectedTab(newValue);
  };

  return (
    <ContentContainer>
      <TabContext value={selectedTab}>
        <Grid container wrap="nowrap">
          <Grid item>
            <Tabs
              orientation="vertical"
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="My Job Experiences"
              css={tabsStyle}
            >
              {myJobExperiences.map(job => (
                <Tab
                  key={job.index}
                  value={job.employer}
                  label={
                    <Typography>
                      {job.employer}
                    </Typography>
                  }
                  disableRipple
                  wrapped
                />
              ))}
            </Tabs>
          </Grid>
          <Grid item>
            {myJobExperiences.map(job => (
              <TabPanel css={tabPanelStyle} key={job.index} value={job.employer}>
                <Grid container>
                  <Grid item>
                    <Typography>
                      {`${job.jobTitle} @ ${job.employer}`}
                    </Typography>
                    <Typography variant="caption">
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
    </ContentContainer>
  );
}
