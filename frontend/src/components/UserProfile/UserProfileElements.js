import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export const UserFormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const UserFormContent = styled.div`
  height: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const UserForm = styled.form`
  background: #fff;
  max-width: 90%;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 240, 222, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px;
  }
`;
export const UserFormH1Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
  text-align: center;
  margin-bottom: 38px;
  align-items: center;
`;

export const UserFormH1 = styled.h1`
  color: #00f0de;
  font-size: 45px;
  font-weight: 400;
  text-align: center;
  font-family: "Audiowide", cursive;
`;
export const UserFormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #000;
`;
export const UserFormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  border-bottom: solid #00f0de 2px;
`;
export const UserFormButton = styled.button`
  background: #00f0de;
  padding: 16px 0;
  border: none;
  border-radius: 10px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #00f0de;
    border: solid #00f0de 2px;
  }
`;
export const UserText = styled.span`
  margin-top: 30px;
  text-align: center;
  color: #000;
  font-size: 14px;
`;
