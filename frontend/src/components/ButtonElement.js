import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll'


export const Button = styled(LinkScroll)`
  border-radius: 10px;
  background: ${({primary}) => (primary ? '#00F0DE' : '#fff')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '30px 50px' : '20px 32px')};
  color: ${({dark}) => (dark ? '#fff' : '#00F0DE')};
  font-size: ${({fontbig}) => (fontbig ? '16px' : '28px')};
  font-family: 'Audiowide', cursive;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#00F0DE')};
    color: ${({dark}) => (dark ? '#00F0DE' : '#fff')};
  }
`