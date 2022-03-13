import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { logout } from '../../actions/userActions'
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SideLogoutBtn,
} from "./SidebarElements";
import { DropIcon, NavBtnLinkR, NavDropdownBtn, NavDropdownMenu } from "../Navbar/NavbarElements";

const Sidebar = ({isOpen, toggle}) => {
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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">About</SidebarLink>
          <SidebarLink onClick={toggle} to="services">Services</SidebarLink>
          <SidebarLink onClick={toggle} to="blog">Blog</SidebarLink>
          <SidebarLink onClick={toggle} to="contact">Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {
              userInfo ? (
              <>
              <NavDropdownBtn>
              <a onClick={() => setOpen(!open)}>{userInfo.name}<DropIcon/></a>
              {
                open && (
                  <NavDropdownMenu>
                    <NavBtnLinkR to="/profile">Profile</NavBtnLinkR>
                    <SideLogoutBtn onClick={onLogout}>logout</SideLogoutBtn>
                  </NavDropdownMenu>
                )}
              </NavDropdownBtn>
              </>
              ):(
                <SidebarRoute to="/login">Sign In</SidebarRoute>
                )}
                {/* { userInfo && userInfo.isAdmin && (
                  <NavDropdownBtn>
                    <a onClick={() => setOpen2(!open2)}>Admin<DropIcon/></a>
                    { open2 && (
                       <NavDropdownMenu>
                       <NavBtnLinkR to='/admin/userlist'>Users</NavBtnLinkR>
                       <NavBtnLinkR to='/admin/servicelist'>services</NavBtnLinkR>
                       <NavBtnLinkR to='/admin/aboutlist'>Abouts</NavBtnLinkR>
                       <NavBtnLinkR to='/admin/contactlist'>Contacts</NavBtnLinkR>
                       </NavDropdownMenu>
                    )}
                  </NavDropdownBtn>
                )} */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
