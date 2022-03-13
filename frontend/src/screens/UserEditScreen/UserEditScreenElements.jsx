import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AdminEditProfileContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 87px auto;
`;
export const AdminEditFormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width : 400px){
        height: 80%;
    }
`;
export const AdminCheckBox = styled.input`
    border:2px dotted #00f;
    width: 28px;
    height: 28px;
    margin-bottom: 30px;
    display:block;
    background:#00F0DE;
    @media screen and (max-width : 400px){
        height: 80%;
    }
`;

export const AdminEditFormContent = styled.div`
    height: 100%;
    display: grid;
    gap:30px;
    grid-template-columns: repeat(2, 1fr);
    justify-content:center;
    aligh-items: center;
    
    @media screen and (max-width : 680px){
        grid-template-columns: 1fr;
    }
`;


export const AdminEditForm = styled.form`
    background: #fff;
    max-width: 90%;
    height: auto;
    width: 100%;
    z-index:1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9)


    @media screen and (max-width : 480px){
        padding: 32px;
    }
`;
export const AdminEditFormH1Wrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    text-align: center;
    margin-bottom: 38px;
    align-items: center;
`;

export const AdminEditFormH1 = styled.h1`
    color: #00F0DE;
    font-size: 45px;
    font-weight: 400;
    text-align: center;
    font-family: 'Audiowide', cursive;


`;
export const AdminCheckWrap = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center
    with: 100%;
`;
export const SmallAdmin = styled.p`
    font-size: 1.14rem;
`;
export const AdminEditFormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    color: #000;
`;
export const AdminEditFormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    border-bottom: solid #00F0DE 2px;
`;
export const AdminEditFormButton = styled.button`
    background: #00F0DE;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #00f0de;
        border: solid #00f0de 2px;
      }
`;
export const AdminEditText = styled.span`
    margin-top: 30px;
    text-align: center;
    color: #000;
    font-size: 14px;
`;