import styled from '@emotion/styled'
import React from 'react'
import Analytics from './Analytics/Analytics';
import DataTable from './DataTables/DataTable';
import NavBar from './NavBar';
import Form from './UserForm/Form';

function Page() {
    return (
        <PageContainer>
            <NavBar/>
            <Form/>
        </PageContainer>
    )
}

export default Page

const PageContainer = styled.div`
font-family: 'Roboto', sans-serif;
background-color: lightgrey;
height: 100vh;
width: 100vw;
display: grid;
grid-gap: 0.5em;
grid-template-rows: 3rem 1fr;
grid-template-areas: 
'navbar'
'content';

@media (${({theme})=>theme.mediaquery.largeScreens}) {
    grid-template-columns: 6rem 1fr;
    grid-template-areas: 
    'navbar content';
}
`;