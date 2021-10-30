import styled from '@emotion/styled'
import React from 'react'
import Card from './Card';

function Analytics() {
    return (
        <AnalyticsContainer>
            <CardsContainer>
                <Card title={'Num. of Albums'} value = {10}/>
                <Card title={'Num. of Comments'} value = {10}/>
                <Card title={'Num. of Photos'} value = {10}/>
                <Card title={'Num. of Posts'} value = {10}/>
                <Card title={'Num. of Todos'} value = {10}/>
                <Card title={'Num. of Users'} value = {10}/>
                
            </CardsContainer>
        </AnalyticsContainer>
    )
}

export default Analytics

const AnalyticsContainer = styled.div`
background-color: white;
margin: auto;
grid-area: content;
width: 100%;
height: 100%;

display: grid; 
grid-template-columns: 1fr;
grid-template-rows: 10rem 1fr;
grid-template-areas: 
'cards'
'charts'
;
`;

const CardsContainer = styled.div`
grid-area: cards;
`;
