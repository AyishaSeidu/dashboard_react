import React from 'react';
import styled  from '@emotion/styled';
import { keyframes } from '@emotion/react';

function Card({title, value}) {
    return (
        <CardContainer>
            <TitleContainter>{title}</TitleContainter>
            <ValueContainer>{value}</ValueContainer>
        </CardContainer>
    )
}

export default Card;

const CardAnimation = keyframes`
0% {
    margin-top: 1rem;
}
100% {
margin-top: 0.3rem;
}
`;

const CardContainer =styled.div`
background-color: white;
display: inline-block;
padding: 0.5rem;
margin: 0.3rem;
font-size: 1rem;
align-items: center;
height: 50%;
animation: ${CardAnimation} ease-in 2s;
background-color: ${({theme})=>theme.colors.primary};
color: ${({theme})=>theme.colors.secondary};
//border: 0.05rem solid ${({theme})=>theme.colors.secondary};;
cursor: pointer;
grid-area: ${({area})=>area};
:hover {
    background-color: ${({theme})=>theme.colors.secondary};
    color: ${({theme})=>theme.colors.primary}; 
}
`;

const TitleContainter = styled.div`
padding: 0.3rem;
margin: auto;
font-weight: bold;
`;
const ValueContainer = styled.div``;
