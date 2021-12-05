import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { DotLoader } from "react-spinners";
import Analytics from "./Analytics/Analytics";
import DataTable from "./DataTables/DataTable";
import NavBar from "./NavBar";
import Form from "./UserForm/Form";
import Login from "./Login";

export const DataContext = React.createContext();
function Page() {
  //login setup
  const appUsers = [
    { username: "admin", password: "admin_test", permissionLevel: "admin" },
    { username: "Ayi", password: "hisham", permissionLevel: "user" },
    { username: "user1", password: "user", permissionLevel: "user" }
  ];

  //user form
  const [inputMode, setInputMode] = useState(false)

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //data fecting from API
  const [query, setQuery] = useState("analytics");
  const [analyticsData, setAnalyticsData] = useState([{}]);
  const [tableData, setTableData] = useState([{}])
  const [loading, setLoading] = useState(false);

  //spinner's css

  const spinnerCSS = css`
    grid-area: content;
    margin: auto;
  `;

  useEffect(() => {
    const fecthData = async (query) => {
        setLoading(true);
      if (query === "analytics" && loggedIn) {
        const albumRequest = async () => await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const commentRequest = async () => await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const photoRequest = async () => await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );  
        const postRequest = async () => await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const todoRequest = async () => await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const userRequest = async () => await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        //fetch analytics data
        try {
          Promise.all([
            albumRequest(),
            commentRequest(),
            photoRequest(),
            postRequest(),
            todoRequest(),
            userRequest(),
          ]).then((res) => {
            setAnalyticsData(res);
            setLoading(false);
          });
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }

      else if (query!=="analytics" && loggedIn) {
      setLoading(true)
        try {
          await axios.get(`https://jsonplaceholder.typicode.com/${query}`)
          .then((res)=>{
            setTableData(res.data);
            setLoading(false)
          })
        }
        catch (error) {
          console.log(error);
          setLoading(false);
        }

      }
    };
    fecthData(query);
  }, [query,loggedIn]);

  //browser output

  if (loggedIn === false) {
    return (
      <PageContainer>
        <Login
          appUsers={appUsers}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <DataContext.Provider value={{ query, setQuery, setInputMode, analyticsData, tableData }}>
          <NavBar />
          {loading && loggedIn ? (
            <DotLoader css={spinnerCSS} />
          ) : (
            <>
              {inputMode && query==='users' && currentUser[0].permissionLevel==='admin' ? (
                <>
                <Form/>
                <AddButton onClick={(e)=> {e.preventDefault(); setInputMode(false)}}>{`<< Back`}</AddButton>
                </>
              ): (
                <>
                <Head>{query}</Head>
                  {loggedIn && query === "analytics" && <Analytics />}
                  {loggedIn && query !== "analytics" &&
                  <>
                  {(query==="users" && currentUser[0].permissionLevel==='admin') && <AddButton onClick={(e)=> {e.preventDefault(); setInputMode(true)}}>Add User +</AddButton> }
                  <DataTable/>
                  </>
                  }
                </>
              )}
            </>

          )}
        </DataContext.Provider>
      </PageContainer>
    );
  }
}

export default Page;

const PageContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  background-color: rgb(229, 228, 226);
  height: 100vh;
  width: 100vw;
  font-size: 1vw;
  display: grid;
  grid-gap: 0.5em;

  grid-template-rows: 2rem 1fr 1fr;
  grid-template-columns: 11rem 1fr 5rem;
  grid-template-areas:
      "navbar pageHead addUserButton"
      "navbar content content"
      "navbar content content";
      
  @media (${({ theme }) => theme.mediaquery.smallScreens}) {
    grid-template-rows: 3rem 2rem 1fr;
    grid-template-columns: 1fr 5rem;
  grid-template-areas:
    "navbar navbar"
    "pageHead addUserButton"
    "content content";
  }
`;
const Head = styled.div`
grid-area: 'pageHead';
align-self: center;
font-size: 3vh;
font-weight: bold;
text-transform: capitalize;
`;

const AddButton = styled.button`
grid-area: addUserButton;
background-color: #00c7b6;
cursor: pointer;
color: white;
font-size: 0.7rem;
border: .1rem solid #00c7b6;
border-radius: .5rem;
margin: .2rem;
text-align: center;
padding: 0.1rem;
:hover {
  border-color: black;
}
`;