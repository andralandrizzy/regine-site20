import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { MdOutlineArrowDropDown } from 'react-icons/md'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index:100;
    /* margin-bottom: -80px; */
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    justify-content: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-weight: bold;
    text-decoration: none;
`;
export const ImgLogo = styled.img`
    height: 55px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;

    @media screen and (max-width: 768px){
        height: 45px;
    }
`;



export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: -0.5rem;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    margin-right: -22px;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 768px){
        display: none
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;
export const DropIcon = styled(MdOutlineArrowDropDown)`
    color: #fff;
    
`;

export const NavLinks = styled(LinkScroll)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #00F0DE;
    }
`;

export const NavDropdownBtn = styled.div`
    position: relative;
    border-radius: 10px;
    background: #00F0DE;
    white-space: nowrap;
    padding: 15px 25px;
    color: #fff;
    font-size: 1.3rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :last-child {
        margin-left: 10px;
    }

    &:hover {
        transform: scale(0.97);
        transition: all 0.2s ease-in-out;
    }
    
    @media screen and (max-width: 768px){
        
    }
`;

export const NavDropdownMenu = styled.div`
    position: absolute;
    color: #fff;
    background: #00f0de;
    width: 100%;
    left: 0%;
    top: calc(100% + .1rem);
    padding: 15px;
    display:flex;
    margin: auto;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
    @media screen and (max-width: 768px){
        
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none
    }
`;
export const NavBtnLink = styled(LinkRouter)`
    border-radius: 10px;
    background: #00F0DE;
    white-space: nowrap;
    padding: 15px 25px;
    color: #fff;
    font-size: 1.3rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #04c3b4;
        border: solid 1px #04c3b4;
    }
`;
export const NavBtnLinkR = styled(LinkRouter)`
    border-radius: 10px;
    background: #00F0DE;
    white-space: nowrap;
    padding: 15px 25px;
    color: #fff;
    font-size: 1.3rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`;
export const LogoutBtn = styled.button`
    border-radius: 10px;
    background: #00F0DE;
    white-space: nowrap;
    padding: 15px 25px;
    color: #fff;
    font-size: 1.3rem;
    border: none;
    width: 100%;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #04c3b4;
        border: solid 1px #04c3b4;
    }
`;
export const WelcomeText = styled.h1`
    color: #000;
`;




