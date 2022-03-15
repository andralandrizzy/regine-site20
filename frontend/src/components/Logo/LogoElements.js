import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";

export const NavLogo = styled(LinkRouter)`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-weight: bold;
  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LogoIcon = styled(IoIosPeople)`
  color: #4a4b4b;
  font-size: 4rem;
  padding-right: 10px;
`;
export const LogoText = styled.h1`
  color: #4a4b4b;
  font-family: "Sonsie One", cursive;
  font-size: 2rem;
  border: double #4a4b4b 4px;
  padding: 2px 10px;
  margin: 0;
  border-radius: 3px;
`;
