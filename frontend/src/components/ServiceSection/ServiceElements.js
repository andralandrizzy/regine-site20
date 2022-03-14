import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const ServiceContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ServiceHeading = styled.h1`
  font-family: "Audiowide", cursive;
  font-size: 2.6rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3;
  }
`;
export const ServiceSubHeading = styled.h3`
  font-family: "Audiowide", cursive;
  text-align: center;
  font-size: 1.4rem;
  color: #4e4a4a;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServiceImageWrap = styled.div`
  width: 100%;
  height: 220px;
  text-align: center;
  display: flex;
  justify-content: center;
  /* margin: auto; */

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServiceImage = styled.img`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
  /* padding-top: 20px; */
  :hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }
`;
export const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  justify-content: center;
  text-align: start;
  gap: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  /* padding: 30px 12px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const ServiceCardWrapper = styled.div``;
export const LinkR = styled(LinkRouter)`
  text-decoration: none;
  color: #000;
  :hover {
    color: #00f0de;
  }
`;
export const ServiceInfoWrap = styled.div`
  padding: 0 20px 20px 20px;
  background-color: rgba(206, 206, 206, 0.15);
`;

export const ServiceCardTitle = styled.div`
  font-family: "Audiowide", cursive;
  padding: 18px 0;
  font-size: 1.48rem;
`;
export const ServiceCardDesc = styled.div`
  max-width: 1100px;
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.2;
  color: #626766;
`;
