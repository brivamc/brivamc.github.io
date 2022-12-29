/** @jsxImportSource @emotion/react */
import { Grid, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import { ContentContainer } from "../../util";
import { MyJobExperience, myJobExperiences } from "./experienceText";
import { TabList, TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";

export const MyExperience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<MyJobExperience["employer"]>(myJobExperiences[0].employer);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: typeof selectedTab) => {
    setSelectedTab(newValue);
  };

  return (
    <ContentContainer>
      <TabContext value={selectedTab}>
      <TabList
        orientation="vertical"
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="My Job Experiences"
      >
        {myJobExperiences.map(job => (
          <Tab key={job.index} value={job.employer} label={job.employer} disableRipple />
        ))}
      </TabList>
      {myJobExperiences.map(job => (
        <TabPanel key={job.index} value={job.employer}>
          <Grid container>
            <Grid item>
              <Typography>{`${job.jobTitle} @ ${job.employer}`}</Typography>
              <Typography>{`${job.startDate} - ${job.endDate ?? "Present"}`}</Typography>
            </Grid>
            <Grid item>
              {job.jobDetails}
            </Grid>
          </Grid>
        </TabPanel>
      ))}
      </TabContext>
    </ContentContainer>
  );
}
