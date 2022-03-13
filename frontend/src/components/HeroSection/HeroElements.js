import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 90vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.25) 38%, rgba(255,255,255,0.65)60%, rgba(0,0,0,0.20)100%);
        z-index: 3;
    }
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroTitle = styled.h1`
    font-family: 'Audiowide', cursive;
    color: #4E4A4A;
    font-size: 92px;
    text-align: start;

    @media screen and (max-width: 768px){
        font-size: 65px;
    }
    @media screen and (max-width: 480px){
        font-size: 42px;
    }
`
export const HeroText = styled.p`
    color: #190505;
    font-size: 24px;
    text-align: start;
    margin-top: 24px;
    max-width: 600px;
    line-height: 1.5;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 19px;
    }
`
export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 32px;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

