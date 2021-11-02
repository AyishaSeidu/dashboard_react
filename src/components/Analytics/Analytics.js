import styled from '@emotion/styled'
import React, { useContext } from 'react'
import Card from './Card';
import {DataContext} from '../Page'


function Analytics() {


const data = useContext(DataContext);
//get todo data for charts

const todos = data?.analyticsData[4]?.data;

const completed = todos.filter((todo)=> {
    return todo.completed===true
}).length;

const pending = todos.filter((todo)=> {
    return todo.completed===false
}).length;
console.log(pending)

    return (
        <AnalyticsContainer>
            <CardsContainer>
                <Card area = {'albums'} title={'Albums'} value = {data?.analyticsData[0]?.data?.length}/>
                <Card area = {'comments'} title={'Comments'} value = {data?.analyticsData[1]?.data?.length}/>
                <Card area = {'photos'} title={'Photos'} value = {data?.analyticsData[2]?.data?.length}/>
                <Card area = {'posts'} title={'Posts'} value = {data?.analyticsData[3]?.data?.length}/>
                <Card area = {'todos'} title={'Todos'} value = {data?.analyticsData[4]?.data?.length}/>
                <Card area = {'users'} title={'Users'} value = {data?.analyticsData[5]?.data?.length}/>
                
            </CardsContainer>
        </AnalyticsContainer>
    )
}

export default Analytics

const AnalyticsContainer = styled.div`
//background-color: white;
margin: auto;
grid-area: content;
width: 100%;
height: 100%;
overflow: auto;
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
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-areas: 'albums comments photos posts todos users';
@media (${({theme})=>theme.mediaquery.smallScreens}) {
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-template-areas: 
'albums comments photos'
'posts todos users'; 
}
`;

