import React, { useState } from "react";
import Video from "../../videos/videocom.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Welcome</HeroTitle>
        <HeroText>
          {`${
            "Homes 4 All Consulting is a full service real estate investment.\
          consulting agency. We help our clients identify investments that meet\
          their needs. By creating a well-defined investment criteria which\
          include desired property sectors, targeted geographic regions,\
          acceptable risk parameters and appropriate investment return\
          thresholds. We perform feasibility assessments; conduct due diligence;\
          and support them through all phases of the transaction. The new\
          Caption page Homes 4 All Consulting is a full service real estate\
          investment consulting agency. We help our clients identify investments\
          that meet their needs. By creating a well-defined investment criteria\
          which include desired property sectors, targeted geographic regions,\
          acceptable risk parameters and appropriate investment return\
          thresholds. We perform feasibility assessments; conduct due diligence;\
          and support them through all phases of the transaction.".substring(
              0,
              230
            ) + "..."
          }`}
        </HeroText>
        <HeroBtnWrapper>
          <Button
            fontbig="false"
            primary="true"
            dark="true"
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Read more {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
