import { keyframes, css } from "@emotion/react";
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
export const InputBox = styled.input`
border: 0.05rem solid lightgray;

height: 2rem;
border-radius: 0.2rem;
::placeholder {
    font-style: italic;
    font-size: smaller;
    opacity: 0.4;
}
:focus {
    outline: none;
}
`;

export const FormField = styled.fieldset`
width: 80%;
margin: 1rem auto;
//border: 0.1rem solid lightgray;
border: none;
`

export const InputLabel = styled.label`
display: flex;
flex-direction: column;
margin: auto;
padding: 0.5rem;
:first-of-type {
    margin-top: 1rem;
}
`;

export const SubmitButton = styled.button`
display: block;
margin: 2rem auto;
pad: 1rem;
cursor: pointer;
color: white;
background-color: green;
border: .2rem solid green;
width: 5rem;
height: 2rem;
border-radius: 0.5rem;
:hover {
    height: 2.5rem;
    font-size: 1rem;
}
`;

export const FormNav = styled.button`
cursor: pointer;
align-content: left;
color: white;
background-color: red;
border: 0.1rem solid red;
border-radius: .2rem;
margin: 0.5rem;
padding: .5rem;
width: 4rem;
`;

export const FormHead = styled.legend`
text-align: center;
font-weight: bold;
`