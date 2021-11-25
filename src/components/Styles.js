import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ChartArea = styled.div`
padding: 0.5rem 1rem;
grid-area: ${({gridarea})=>gridarea};
margin: 1rem auto;
height: 85%;
width: 80%;
align-items: center;
border: 0.1rem solid lightgray;
`;

const DataAnimation = keyframes`
0%{
    margin: 3rem auto;
}

50% {
    margin: 1rem auto;
}

100% {
    margin: 1rem auto;
}
`;

export const TableContainer = styled.div`
height: 90%;
width: 80%;
background-color: white;
margin: auto;
grid-area: table;
overflow: auto;
font-size: 0.7rem;
border-width: 0 0 0.2rem 0;
border-color: #00c7b6;
animation: ${DataAnimation} 2s ease-out;
animation-fill-mode: forwards;
`;

//styling for adding user 
const InputBox = styled.input`

`;