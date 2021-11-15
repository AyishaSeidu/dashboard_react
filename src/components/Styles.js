import styled from "@emotion/styled";

export const ChartArea = styled.div`
padding: 0.5rem 1rem;
grid-area: ${({gridarea})=>gridarea};
margin: auto;
height: 90%;
width: 90%;
align-items: center;
border: 0.1rem solid lightgray;
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
`;