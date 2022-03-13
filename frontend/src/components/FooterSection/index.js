import React from "react";
import {
  EmailIcon,
  EmailInfo,
  FacebookIcon,
  FooterContainer,
  FooterContent,
  FooterHeading,
  FooterInfo,
  FooterInfoWrap,
  FooterIconWrap,
  FooterWrapper,
  HotLineIcon,
  IgIcon,
  LocIcon,
  LocInfo,
  PhoneInfo,
  TwitterIcon,
  FooterCopyright,
} from "./FooterElements";

const FooterSection = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterInfo>
            <FooterHeading>Location</FooterHeading>
            <FooterInfoWrap>
              <LocIcon />
              <LocInfo>
                1525 Cool Site St <br />
                Miami, FL
              </LocInfo>
            </FooterInfoWrap>
          </FooterInfo>
          <FooterInfo>
            <FooterHeading>Hot Lines</FooterHeading>
            <FooterInfoWrap>
              <HotLineIcon />
              <PhoneInfo>
                +1 (333) 333-3333 <br />
                +1 (444) 444-4444
              </PhoneInfo>
            </FooterInfoWrap>
          </FooterInfo>
          <FooterInfo>
            <FooterHeading>Email</FooterHeading>
            <FooterInfoWrap>
              <EmailIcon />
              <EmailInfo>youremail@gmail.com</EmailInfo>
            </FooterInfoWrap>
          </FooterInfo>
          <FooterInfo>
            <FooterHeading>Follow us on:</FooterHeading>
            <FooterIconWrap>
              <IgIcon />
              <FacebookIcon />
              <TwitterIcon />
            </FooterIconWrap>
          </FooterInfo>
        </FooterContent>
        <FooterCopyright>
              Copyright &copy; 2022 all rights reserved
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default FooterSection;
