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
background-color: lightgrey;
height: 100vh;
width: 100vw;
display: grid;
grid-template-rows: 3rem 1fr 2rem;
grid-template-areas: 
'navbar'
'content'
'pagination'
`;