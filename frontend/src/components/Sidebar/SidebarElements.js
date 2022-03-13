import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    overflow-y: hidden;
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`
export const Icon = styled.div`
    position: absolute;
    top: 0.8rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`
export const SidebarWrapper = styled.div`
    color: #000;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5, 60px);
    }

`
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SideWelcomeText = styled.h1`
    color: #000;
    text-align: center;
`
export const SidebarRoute = styled(LinkRouter)`
    border-radius: 10px;
    background: #04c3b4;
    white-space: nowrap;
    padding: 16px 60px;
    color: #fff;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background: #fff;
        color: #04c3b4;
        border: solid 1px #04c3b4;
        transition: 0.2s ease-in-out
    }
`
export const SideLogoutBtn = styled.button`
    border-radius: 10px;
    background: #04c3b4;
    white-space: nowrap;
    padding: 16px 60px;
    color: #fff;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background: #fff;
        color: #04c3b4;
        border: solid 1px #04c3b4;
        transition: 0.2s ease-in-out
    }
`