import styled from 'styled-components'

export const ContactMeContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContactMeHeading = styled.h1`
    font-family: 'Audiowide', cursive;
    font-size: 2.6rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 25px;

    @media screen and (max-width: 768px){
        font-size: 1.8rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.3;
    }
`
export const ContactMeFormWrap = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    // border: solid 1px blue;
    width: 100%;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    @media screen and (max-width : 400px){
        height: 80%;
    }
`;
export const ContactMeMapContent = styled.iframe`
    border:none;
    loading: lazy;
    flex:1;
    width: 100%;
    height: 550px;
`;



export const ContactMeFormContent = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width : 480px){
        padding: 10px;
    }
`;
export const ContactMeForm = styled.form`
    // max-width: 550px;
    // height: auto;
    width: 100%;
    z-index:1;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    // box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    @media screen and (max-width : 480px){
        padding: 32px;
    }
`;


export const ContactMeFormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    border: solid rgba(78, 74, 74, 0.266)1px;
    font-size: 18px;
`;
export const ContactMeFormeTextArea = styled.textarea`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    height: 150px;
    border-radius: 4px;
    border: solid rgba(78, 74, 74, 0.266)1px;
    font-size: 18px;
`;
export const ContactMeFormButton = styled.button`
    background: #00F0DE;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 25px;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #00f0de;
        border: solid #00f0de 2px;
      }
`;
