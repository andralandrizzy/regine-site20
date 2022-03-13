import styled from "styled-components"
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

export const CheckIconGreen = styled(BsFillCheckCircleFill)`
    font-size: 1.3rem;
    color: #67ff34;
`
export const CheckIconRed = styled(BsFillCheckCircleFill)`
    font-size: 1.3rem;
    color: #f51616;
`
export const DeleteIcon = styled(MdDelete)`
    font-size: 1.3rem;
    color: #f51616;
    margin-left: 10px;
`
export const EditIcon = styled(FaEdit)`
    font-size: 1.3rem;
    color: #c7ab09;
    margin-right: 10px;
`
export const UserBtn = styled.button`
    border: none;
    outline: none;
    background: transparent;
`

export const TableContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 87px auto 24px auto;
    padding: 45px;
`
export const TableHeading = styled.h1`
    align-items: start;
    margin-bottom: 25px;
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