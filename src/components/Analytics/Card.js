import React from 'react'
import styled  from '@emotion/styled'

function Card({title, value}) {
    return (
        <CardContainer>
            <TitleContainter>{title}</TitleContainter>
            <ValueContainer>{value}</ValueContainer>
        </CardContainer>
    )
}

export default Card;

const CardContainer =styled.div`
background-color: white;
display: inline-block;
padding: 0.5rem;
`;
const TitleContainter = styled.div``;
const ValueContainer = styled.div``;
