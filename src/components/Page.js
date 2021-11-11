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
  ];
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //data fecting from API
  const [query, setQuery] = useState("");
  const [analyticsData, setAnalyticsData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  //spinner's css

  const spinnerCSS = css`
    grid-area: content;
    margin: auto;
  `;

  useEffect(() => {
    const fecthData = async (query) => {
        setLoading(true);
      if (query === "" && loggedIn) {
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
            console.log(commentRequest.data)
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
              console.log('we are in the then block')
            console.log(res[1]);
            setAnalyticsData(res);
            setLoading(false);
          });
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    };
    fecthData(query);
  }, [query,loggedIn]);

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
        <DataContext.Provider value={{ query, setQuery, analyticsData }}>
          <NavBar />
          {loading && loggedIn ? (
            <DotLoader css={spinnerCSS} />
          ) : (
            <>
            <Head>Analytics</Head>
              {loggedIn && query === "" && <Analytics />}
              {loggedIn && query != "" && <DataTable />}
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
  grid-template-rows: 3rem 3rem 1fr;
  grid-template-areas:
    "navbar"
    "pageHead"
    "content";

  @media (${({ theme }) => theme.mediaquery.largeScreens}) {
    grid-template-rows: 5rem 1fr 1fr;
    grid-template-columns: 11rem 1fr;
    grid-template-areas:
      "navbar pageHead"
      "navbar content"
      "navbar content";
  }
`;
const Head = styled.div`
grid-area: 'pageHead';
align-self: center;
font-size: 2rem;
font-weight: bold;
`;