/** @jsxImportSource @emotion/react */
import { useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { ContentContainer } from "../../util";
import { MyJobExperience, myJobExperiences } from "./experienceText";
import { ExperienceTabs } from "./ExperienceTabs";
import { ExperienceTabsMobile } from "./ExperienceTabsMobile";

export const MyExperience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<MyJobExperience>(myJobExperiences[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  
  return (
    <ContentContainer title="Places I've Worked">
      {isMobile ?
        <ExperienceTabsMobile
          jobExperiences={myJobExperiences}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        /> :
          <ExperienceTabs
            jobExperiences={myJobExperiences}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />}
    </ContentContainer>
  );
}
