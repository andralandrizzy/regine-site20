import styled from 'styled-components'
import { CgLoadbar } from 'react-icons/cg'

export const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const AboutContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 20px;
`
export const AboutHeading = styled.h1`
    font-family: 'Audiowide', cursive;
    font-size: 2.6rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 60px;

    @media screen and (max-width: 768px){
        font-size: 1.8rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.3;
    }
`
export const AboutImageContent = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    @media screen and (max-width: 768px){
        gap: 15px;
    }
`
export const AboutImageWrapper = styled.div`
    width: 250px;
    height: 441px;
    position: relative;
    border-radius: 10px;
    border: solid #04c3b4 1px;
    :last-child{
        top: 80px;
        right: 45px;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
        :last-child{
            top: 0;
            right: 0;
        }
    }
`
export const AboutImage = styled.img`
    -o-object-fit: cover;
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 500px;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        height: 300px;
    }
`
export const AboutTextContent = styled.div`
    width: 100%;
    flex: 2;
`

export const AboutTitle = styled.h1`
    font-size: 1.68rem;
    font-weight: 100;
    color: #707070;
    font-family: 'Audiowide', cursive;
    margin-bottom: 20px;
    margin-top: 15px;
`
export const AboutTitleBar = styled(CgLoadbar)`
    font-size: 2.57rem;
    color: #707070;
`
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const AboutLine = styled.hr`
    margin-top: 30px;
    color: rgba(0, 0, 0, 0.19);
`
export const DescriptionWrapper = styled.p`
    background: rgba(206, 206, 206, 0.15);
    padding: 20px;
    line-height: 1.5;
    font-size: 1.3rem;
    color: #707070;
`


