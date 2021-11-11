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