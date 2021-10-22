import styled from '@emotion/styled'
import React, {useState, useEffect} from 'react'
import Analytics from './Analytics/Analytics';
import DataTable from './DataTables/DataTable';
import NavBar from './NavBar';
import Form from './UserForm/Form';
import Login from './Login';

function Page() {

//login setup    
const appUsers = [{username: 'admin', password: 'admin_test', permissionLevel: 'admin'}, {username:'Ayi', password: 'hisham', permissionLevel: 'user'}];
const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({});

    return (
        <PageContainer>
        {loggedIn ? (

<>
<NavBar/>
<Form />
</>
        ): (
        <>
        <Login appUsers={appUsers} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>
        </>
        
        )}

</PageContainer>
    )
}

export default Page

const PageContainer = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
background-color: rgb(229, 228, 226);
height: 100vh;
width: 100vw;
font-size: 1vw;
display: grid;

grid-gap: 0.5em;
grid-template-rows: 3rem 1fr;
grid-template-areas: 
'navbar'
'content';

@media(${({theme})=>theme.mediaquery.largeScreens}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 7rem 1fr;
    grid-template-areas: 
    'navbar content'
    'navbar content'
    ;
}
`;