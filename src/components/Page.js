import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import Analytics from "./Analytics/Analytics";
import DataTable from "./DataTables/DataTable";
import NavBar from "./NavBar";
import Form from "./UserForm/Form";
import Login from "./Login";
import axios from "axios";

export const DataContext = React.createContext();
function Page() {
  //login setup
  const appUsers = [
    { username: "admin", password: "admin_test", permissionLevel: "admin" },
    { username: "Ayi", password: "hisham", permissionLevel: "user" },
  ];
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  //data fecting from API
  const [query, setQuery] = useState("");
  const [analyticsData, setAnalyticsData] = useState([{}]);

  useEffect(() => {
    const fecthData = async (query) => {
      if (query === '' && loggedIn) {
          alert('QUERY WORKS')
        const albumRequest = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const commentRequest = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const photoRequest = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const postRequest = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const todoRequest = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const userRequest = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        try {
          Promise.all([
            albumRequest,
            commentRequest,
            photoRequest,
            postRequest,
            todoRequest,
            userRequest,
          ]).then((res) => {
            console.log(res[1]);
            setAnalyticsData(res);
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    fecthData(query);
  }, [query]);

  return (
    <PageContainer>
      {loggedIn ? (
        <>
          <DataContext.Provider value={{ query, setQuery, analyticsData }}>
            <NavBar />

            {loggedIn && query === "" && <Analytics />}
            {loggedIn && query != "" && <DataTable />}
          </DataContext.Provider>
        </>
      ) : (
        <>
          <Login
            appUsers={appUsers}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
          />
        </>
      )}
    </PageContainer>
  );
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
  grid-template-rows: 3rem 1fr;
  grid-template-areas:
    "navbar"
    "content";

  @media (${({ theme }) => theme.mediaquery.largeScreens}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 11rem 1fr;
    grid-template-areas:
      "navbar content"
      "navbar content";
  }
`;
