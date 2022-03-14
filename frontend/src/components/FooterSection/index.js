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
                3275 S John Young Parkway <br /> STE 668 <br />
                Kissimmee, FL 34746
              </LocInfo>
            </FooterInfoWrap>
          </FooterInfo>
          <FooterInfo>
            <FooterHeading>Hot Lines</FooterHeading>
            <FooterInfoWrap>
              <HotLineIcon />
              <PhoneInfo>
                Phone: 407-887-8377 <br />
                Fax: 407-904-6216
              </PhoneInfo>
            </FooterInfoWrap>
          </FooterInfo>
          <FooterInfo>
            <FooterHeading>Email</FooterHeading>
            <FooterInfoWrap>
              <EmailIcon />
              <EmailInfo href="mailto:homes4allconsulting@gmail.com">
                homes4allconsulting@gmail.com
              </EmailInfo>
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
