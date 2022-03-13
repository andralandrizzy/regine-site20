import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const ServiceDetailsWrap = styled.div`
`;
export const ServiceDetailsContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto 30px auto;
`;
export const ServiceDetailsImgWrap = styled.div`
    width: 960px;
    height: auto;
    padding: 0;
    margin: 0;
`;
export const ServiceDetailsImg = styled.img`
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 600px;
`;
export const ServiceDetailsText = styled.div`
    font-size: 2rem;
    font-family: 'Audiowide', cursive;
    color: #000;
    margin: 25px auto;
`;
export const ServiceDetailsBody = styled.div`
    font-size: 1.3rem;
    margin-bottom: 15px;
`;