import styled from 'styled-components'


export const SubscribeFormContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 40vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(218deg, rgba(0,111,103,0.06) 6%, rgba(0,56,52,0.53) 53%);

        z-index: 3;
    }
`
export const SubscribeFormBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const FormImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
export const SubscribeFormContent = styled.div`
    z-index: 3;
    width: 100%;
    position: relative;
    // border: solid red 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`
export const SubscribeFormTitle = styled.h1`
    font-family: 'Audiowide', cursive;
    color: #fff;
    font-size: 23px;
    // white-space: nowrap;
    margin-right: 20px;
    text-transform: uppercase;
    text-align: center;
    // border: solid red 2px;

    @media screen and (max-width: 768px){
        font-size: 0.9rem;
        margin-bottom: 20px;
    }
`
export const SubscribeFormSpan = styled.span`
    font-family: 'Audiowide', cursive;
    color: #04c3b4;
    font-size: 35px;

    @media screen and (max-width: 768px){
        font-size: 0.9rem;
    }
`
export const SubscribeForm = styled.form`
    width: 100%;
    // border: solid blue 2px;
    display: grid;
    grid-template-columns: auto;
    align-items: center;
`
export const SubscribeFormInput = styled.input`
    padding: 23px;
    margin: 0;
    width: 60%;
    font-size: 1.3rem;
    outline: none;
    flex: 2;
    @media screen and (max-width: 768px){
        font-size: 0.9rem;
        padding: 23px;
    }
`
export const SubscribeFormBtn = styled.button`   
    padding: 20px;
    margin: 0;
    width: 40%;
    font-size: 1.7rem;
    background: #04c3b4;
    flex: 1;
    color: #fff;
    border: none;
    outline: none;
    @media screen and (max-width: 768px){
        font-size: 1.1rem;
        padding: 21px;
    }
`

