import styled from 'styled-components'
import {AiFillPlusCircle} from 'react-icons/ai'

export const TableAboutContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 60px auto 0 auto;
    padding: 45px;
`
export const HeadingWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`
export const IconPlus = styled(AiFillPlusCircle)`
    color: #00F0DE;
    font-size: 40px;
`

export const PlusIconLink = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    background: transparent;
`;
export const AboutDeleteBtn = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
`;
export const AboutEditBtn = styled.button`
    border: solid yellow 1px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
`;



export const TableHeading = styled.h1`
    align-items: start;
    font-size: 38px;
    font-family: 'Audiowide', cursive;
    color: #4E4A4A;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`