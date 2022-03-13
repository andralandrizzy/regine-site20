import React, { useEffect, useState } from "react";
import logo from '../../images/rlogo.png'
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { logout } from '../../actions/userActions'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoutBtn,
  ImgLogo,
  NavDropdownBtn,
  NavBtnLinkR,
  DropIcon,
  NavDropdownMenu,
} from "./NavbarElements";


const Navbar = ({toggle}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  const onLogout = ()=>{
    dispatch(logout())
    navigate('/')
  }
  

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=> {
    if (window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  };

  useEffect(()=> {
    window.addEventListener('scroll', changeNav)
  },[]);


  const toggleHome = ()=>{
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <ImgLogo src={logo} alt="site logo"/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
              < NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="blog" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Blog</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Contact</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
          {
              userInfo ? (
                <>
                <NavDropdownBtn>
                  <a onClick={() => setOpen(!open)}>{userInfo.name}<DropIcon/></a>
                  {open && (
                    <NavDropdownMenu>
                    <NavBtnLinkR to="/profile">Profile</NavBtnLinkR>
                    <LogoutBtn onClick={onLogout}>logout</LogoutBtn>
                    </NavDropdownMenu>
                  )}
                </NavDropdownBtn>
                </>
              ): (
                <NavBtnLink to="/login">Sign In</NavBtnLink>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdownBtn>
                <a onClick={() => setOpen2(!open2)}>Admin<DropIcon/></a>
                {open2 && (
                  <NavDropdownMenu>
                  <NavBtnLinkR to='/admin/userlist'>Users</NavBtnLinkR>
                  <NavBtnLinkR to='/admin/servicelist'>services</NavBtnLinkR>
                  <NavBtnLinkR to='/admin/aboutlist'>Abouts</NavBtnLinkR>
                  <NavBtnLinkR to='/admin/contactlist'>Contacts</NavBtnLinkR>
                  </NavDropdownMenu>
                )}
              </NavDropdownBtn>
              )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
