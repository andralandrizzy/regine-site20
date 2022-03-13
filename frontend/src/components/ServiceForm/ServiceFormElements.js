import styled from 'styled-components';



export const ServiceProfileContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 120px auto 0px auto;
`;
export const ServiceFormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width : 400px){
        height: 80%;
    }
`;

export const ServiceFormContent = styled.div`
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


export const ServiceFormH1Wrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    text-align: center;
    margin-bottom: 38px;
    align-items: center;
`;

export const ServiceFormH1 = styled.h1`
    color: #00F0DE;
    font-size: 45px;
    font-weight: 400;
    text-align: center;
    font-family: 'Audiowide', cursive;
`;


export const ServiceText = styled.span`
    margin-top: 30px;
    text-align: center;
    color: #000;
    font-size: 14px;
`;