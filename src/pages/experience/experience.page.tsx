import React, { useState } from "react";

import { ContentContainer } from "../../components/util";
import { PortfolioPageProps } from "../../types/pages";
import { ExperienceTabs } from "./ExperienceTabs";
import { ExperienceTabsMobile } from "./ExperienceTabsMobile";
import { MyJobExperience, myJobExperiences } from "./experienceText";

export const ExperiencePage: React.FC<PortfolioPageProps> = ({
  isMobile = false
}) => {
  const [selectedTab, setSelectedTab] = useState<MyJobExperience>(myJobExperiences[0]);

  return (
    <ContentContainer isMobile={isMobile} title="Places I've Worked">
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
};
