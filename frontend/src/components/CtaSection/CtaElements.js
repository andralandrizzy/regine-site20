import styled from "styled-components";
import { BiCalendarAlt, BiCalendarEvent } from "react-icons/bi";
import { Link as LinkScroll } from "react-scroll";

export const CtaContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 50vh;
  position: relative;
  z-index: 1;
  margin: 30px 0;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(90deg, rgba(255,255,255,0.65) 0%, rgba(3, 126, 117, 100) 90%);
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.65) 0%,
      rgba(3, 126, 117, 100) 38%,
      rgba(3, 126, 117, 100) 50%,
      rgba(255, 255, 255, 0.65) 90%
    );
    z-index: 3;
  }
`;
export const CtaBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const CtaContent = styled.div`
    z-index: 3;
    max-width: 1200px
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;
export const CtaTitle = styled.h1`
  font-family: "Audiowide", cursive;
  color: #fff;
  font-size: 23px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const CtaText = styled.p`
  color: #fff;
  font-size: 40px;
  text-align: start;
  margin-top: 10px;
  max-width: 600px;
  font-family: "Audiowide", cursive;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const CtaBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 32px;
  align-items: center;
  font-family: "Audiowide", cursive;
`;
export const CtaButton = styled(LinkScroll)`
  display: flex;
  text-align: center;
  align-items: center;
  font-family: "Audiowide", cursive;
  font-size: 1.3rem;
  border: solid red 2px;
  border-radius: 10px;
  background: #fff;
  color: #04c3b4;
  border: none;
  outline: none;
  padding: 20px 50px;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #04c3b4;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    white-space: nowrap;
    padding: 15px 25px;
  }
`;
export const CalendarClear = styled(BiCalendarAlt)`
  margin-right: 13px;
  font-size: 30px;
`;
export const CalendarEvent = styled(BiCalendarEvent)`
  margin-right: 13px;
  font-size: 30px;
`;
