import React, { useEffect, useState } from "react";
import { LogoIcon, LogoText, LogoWrapper, NavLogo } from "./LogoElements";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <NavLogo to="/" onClick={toggleHome}>
      <LogoWrapper>
        <LogoIcon /> <LogoText>H4AC</LogoText>{" "}
      </LogoWrapper>
    </NavLogo>
  );
};

export default Logo;
