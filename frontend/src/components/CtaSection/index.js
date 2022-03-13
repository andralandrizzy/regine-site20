import React, { useState } from "react";
import Image from "../../images/show2.jpeg";
import {
  CtaContainer,
  CtaBg,
  ImageBg,
  CtaContent,
  CtaTitle,
  CtaButton,
  CtaText,
  CtaBtnWrapper,
  CalendarClear,
  CalendarEvent,
} from "./CtaElements";

const CtaSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <CtaContainer>
      <CtaBg>
        <ImageBg src={Image} alt="Cta image one" />
      </CtaBg>
      <CtaContent>
        <CtaTitle>save time, Feel better</CtaTitle>
        <CtaText>
          Skip the waiting line room! and contact us to book your appointment
        </CtaText>
        <CtaBtnWrapper>
          <CtaButton
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {hover ? <CalendarClear /> : <CalendarEvent />} {} Book an
            appointment
          </CtaButton>
        </CtaBtnWrapper>
      </CtaContent>
    </CtaContainer>
  );
};

export default CtaSection;
