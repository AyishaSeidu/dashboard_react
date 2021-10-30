import styled from '@emotion/styled'
import React, { useContext } from 'react'
import Card from './Card';
import {DataContext} from '../Page'


function Analytics() {

const data = useContext(DataContext) 
    return (
        <AnalyticsContainer>
            <CardsContainer>
                <Card title={'Albums'} value = {data?.analyticsData[0]?.data?.length}/>
                <Card title={'Comments'} value = {data?.analyticsData[1]?.data?.length}/>
                <Card title={'Photos'} value = {data?.analyticsData[2]?.data?.length}/>
                <Card title={'Posts'} value = {data?.analyticsData[3]?.data?.length}/>
                <Card title={'Todos'} value = {data?.analyticsData[4]?.data?.length}/>
                <Card title={'Users'} value = {data?.analyticsData[5]?.data?.length}/>
                
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
