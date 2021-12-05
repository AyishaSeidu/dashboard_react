import styled from '@emotion/styled'
import React, { useContext } from 'react'
import Card from './Card';
import {DataContext} from '../Page'
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';


function Analytics() {


const data = useContext(DataContext);
//get todo data for charts

const todos = data?.analyticsData[4]?.data;
const albums = data?.analyticsData[0]?.data;
const posts = data?.analyticsData[3]?.data;
const users = data?.analyticsData[5]?.data

const completed = todos.filter((todo)=> {
    return todo.completed===true
}).length;

const pending = todos.filter((todo)=> {
    return todo.completed===false
}).length;

//getting bar chart data. this funcion return the number of inputs per user give a user array and the data under study
const getBarChartData = (users=[], chartData=[]) => {
    const dataPerUser = [];

    users.forEach((user)=> {
     let userData = chartData.filter((data)=> {
            return user.id===data?.userId;
        }).length;

   dataPerUser.push(userData);
    })

    return dataPerUser;
}

const usernames = users.map((user)=> {
       return user.username;
    })


const postsPerUser = getBarChartData(users,posts);
const albumsPerUser = getBarChartData(users,albums);
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
            <ChartsContainer>
                <DoughnutChart chartData={[completed, pending]} dataDescription={['Completed', 'Pending']} chartTitle='Todos Details' gridarea='doughnut' />
                <BarChart chartData={albumsPerUser} dataDescription={usernames} chartTitle='Albums per User' gridarea='albumChart'/>
                <BarChart chartData={postsPerUser} dataDescription={usernames} chartTitle='Posts per User' gridarea='postChart'/>
            </ChartsContainer>
        </AnalyticsContainer>
    )
}

export default Analytics

const AnalyticsContainer = styled.div`
margin: auto;
grid-area: content;
width: 100%;
height: 100%;
overflow: auto;
display: grid; 
grid-template-columns: 1fr;
grid-template-rows:10rem 1fr;
grid-template-areas: 
'cards'
'charts'
;
`;


const CardsContainer = styled.div`
grid-area: cards;
display: grid;
overflow: auto;
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

const ChartsContainer = styled.div`
grid-area: charts;
display: grid;
height: 100%;
width: 100%;
overflow: auto;
background-color: white;
grid-gap: 1rem;
grid-template-columns: repeat(3, 1fr);
grid-template-areas: 'doughnut albumChart postChart';

@media (${({theme})=>theme?.mediaquery.smallScreens}) {
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-template-areas: 
'doughnut' 
'albumChart'
'postChart'; 
}
@media ${({theme})=>theme?.mediaquery.mediumScreens} {
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-template-areas: 
'doughnut albumChart' 
'postChart postChart'
; 
}
`;