import styled from "styled-components";


export const AboutFormSection = styled.section`
    width: 100%;
    margin-top: 87px;
`
export const AboutsForm = styled.form`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
`
export const AboutFormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const AboutFormLabel = styled.label`
    font-size: 1.5rem;
`
export const AboutFormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    border-bottom: solid #00F0DE 2px;
`
export const AboutBtnGroup = styled.div`
    border-radius: 10px;
`
export const AboutBtn = styled.button`
    background: #00F0DE;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    width: 100%;
    display: block;
    font-family: 'Audiowide', cursive;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #00f0de;
    border: solid #00f0de 2px;
  }
`