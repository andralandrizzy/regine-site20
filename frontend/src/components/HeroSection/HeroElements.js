import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 90vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.25) 38%,
      rgba(255, 255, 255, 0.65) 60%,
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 3;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(225, 225, 225, 0.55);
  padding: 20px;
  /* margin: 0 auto; */
  border-radius: 7px;
  /* border: solid red 1px; */

  @media screen and (max-width: 768px) {
    margin: 0px 15px;
  }
`;
export const HeroTitle = styled.h1`
  font-family: "Audiowide", cursive;
  color: #4a4b4b;
  font-size: 82px;
  text-align: start;

  @media screen and (max-width: 768px) {
    font-size: 65px;
  }
  @media screen and (max-width: 480px) {
    font-size: 42px;
  }
`;
export const HeroText = styled.p`
  color: rgba(0, 0, 0, 0.724);
  font-size: 24px;
  text-align: start;
  /* margin-top: 24px; */
  width: 780px;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
  }
`;
export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
