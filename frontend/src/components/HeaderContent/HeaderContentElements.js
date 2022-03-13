import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const HeaderShowcase = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    margin-bottom: 67px;
    ::before {
        content: "";
        background-color: rgba(0, 240, 224, 0.3);
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
`;

export const HeaderShowcaseContent = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 45vh;
    text-align: center;
    padding-bottom: 3rem;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const ShowcaseTitle = styled.h1`
    font-family: 'Audiowide', cursive;
    font-size: 3.5rem;
    color: #0e0e0e;
    text-transform: uppercase;
`;
export const BreadcrumLinks = styled.div`
    font-size: 1.3rem;
`;
export const PrevPage = styled(LinkRouter)`
    font-family: 'Audiowide', cursive;
    text-decoration: none;
    color: rgb(2, 85, 80);
    
`;
export const SpanErrow = styled.span`
    font-size: 1.3rem;
    margin: 0 15px;
    
`;
export const ActivePage = styled.a`
    text-decoration: none;
    font-family: 'Audiowide', cursive;
    color: rgb(123, 123, 123);
    :hover {
        color: rgb(123, 123, 123);
    }
`;
