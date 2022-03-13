import styled from 'styled-components'


export const StatsContainer = styled.div`
max-width: 1100px;
width: 100%;
margin: 0 auto;
padding: 60px 20px;
`
export const StatsMainWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`
export const StatsWrap = styled.div`
width: 100%;
padding: 60px 20px;
text-align: center;

@media screen and (max-width: 768px){
    padding: 20px;
}
`
export const StatsNumber = styled.h2`
background: rgba(0, 240, 224, 0.36);
border-radius: 10px;
padding: 20px 45px;
font-size: 2.8rem;
color: #707070;
font-family: 'Audiowide', cursive;
`
export const StatsHeading = styled.p`
    font-size: 2rem;
    margin-top: 10px;
    white-space: nowrap;
    color: #707070;
`

