import React from "react";
import {
  StatsContainer,
  StatsMainWrapper,
  StatsWrap,
  StatsNumber,
  StatsHeading,
} from "./StatsElements";

const StatsSection = () => {
  const StatsData = [
    {
      id: 1,
      num: 2500,
      heading: "Happy Client",
    },
    {
      id: 2,
      num: `${50}+`,
      heading: "Staff Members",
    },
    {
      id: 3,
      num: 15,
      heading: "Years of experience",
    },
    {
      id: 4,
      num: `24/7`,
      heading: "Working Hours",
    },
  ];
  return (
    <StatsContainer>
      <StatsMainWrapper>
        {StatsData.map((stats_content) => (
          <StatsWrap key={stats_content.id}>
            <StatsNumber>{stats_content.num}</StatsNumber>
            <StatsHeading>{stats_content.heading}</StatsHeading>
          </StatsWrap>
        ))}
      </StatsMainWrapper>
    </StatsContainer>
  );
};

export default StatsSection;
