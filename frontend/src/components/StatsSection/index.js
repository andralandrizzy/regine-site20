import React, { useState } from "react";
import AnimatedNumbber from "react-animated-number";
import {
  StatsContainer,
  StatsMainWrapper,
  StatsWrap,
  StatsNumber,
  StatsHeading,
} from "./StatsElements";

// const [loadindStat, setLoadingStat] = useState(false);

const StatsSection = () => {
  const StatsData = [
    {
      id: 1,
      num: 2500,
      heading: "Happy Clients",
    },
    {
      id: 2,
      num: 50,
      heading: "Staff Members",
    },
    {
      id: 3,
      num: 10,
      heading: "Years of experience",
    },
  ];
  return (
    <StatsContainer>
      <StatsMainWrapper>
        {StatsData.map((stats_content) => (
          <StatsWrap key={stats_content.id}>
            <StatsNumber>
              <AnimatedNumbber
                value={Number(stats_content.num)}
                formatValue={(v) => v.toFixed(0)}
                duration={2000}
                style={{ fontSize: 75 }}
              />{" "}
            </StatsNumber>
            <StatsHeading>{stats_content.heading}</StatsHeading>
          </StatsWrap>
        ))}
      </StatsMainWrapper>
    </StatsContainer>
  );
};

export default StatsSection;
