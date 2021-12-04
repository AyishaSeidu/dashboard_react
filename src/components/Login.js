import styled from '@emotion/styled';
import {css} from '@emotion/react'
import React, {useState} from 'react'

function Login( {appUsers, setLoggedIn, setCurrentUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongCredentials, setWrongCredentials] = useState(false);
    //const [wrongPassword, setWrongPassword] = useState(false)

    const signIn = (username, password) =>{
        //check if the user details supplied exists in the appUsers list
        setWrongCredentials(false)
        if (!appUsers.some((user)=>user.username===username)) {
           //alert('incorrect username and password');
           setWrongCredentials(true)
            return;
        }

        else if (appUsers.some((user)=>user.username===username) && !appUsers.some((user)=>user.password===password)) {
       setWrongCredentials(true)
       return;
        }

        else if (appUsers.some((user)=>user.username===username && user.password===password)) {
            let currUser = appUsers.filter((user)=> {return user.username=== username & user.password===password})
            setCurrentUser(currUser);
            setLoggedIn(true)
        }
        else {
            //alert('user not found')
            return;
        }
    }


    return (


       <>
           
            <Form onSubmit={(e)=>{e.preventDefault(); signIn(username, password)}}>
            <FormHeader> Sign In </FormHeader>
               {wrongCredentials && <ErrorMessage>Incorrect username or password, please try again</ErrorMessage>} 
                <InputField type='text' placeholder='username' onChange={(e)=>{e.preventDefault(); setUsername(e.target.value)}} wrongEntry={wrongCredentials}/>
        
                <InputField type='password' placeholder='password' onChange={(e)=>{e.preventDefault(); setPassword(e.target.value)}} wrongEntry={wrongCredentials} />
         
                <SubmitButton type='submit' onClick={(e)=>{e.preventDefault(); signIn(username, password)}}>Login</SubmitButton>
            </Form>
       </>
    )
}

export default Login

const Form = styled.form`
margin: 1rem auto;
border: 0.1rem solid lightgrey;
width: 70%;
height: 50%;
padding: 1rem;
grid-area: content;
background-color: white;
@media(${({theme})=>theme.mediaquery.largeScreens1}) {
width: 20rem;
height: 20rem;
}
`;

// const Container= styled.div`
// border: 0.2rem solid lightgrey;
// background-color: white;
// grid-area: content;
// margin: auto;
// width: 90%;
// height: 70%;
// @media(${({theme})=>theme.mediaquery.largeScreens}) {
//  width: 50%;
//  height: 70%;
// }
// `;

const InputField = styled.input`
display: block;
margin: 3rem auto;
width: 70%;
border-width: 0rem 0rem 0.1rem 0rem;
border-color: lightgrey;
outline: none;
${({wrongEntry})=>wrongEntry===true && css`
border-color: red;
`};
    

::placeholder {
font-style: italic; 
}
`;

const SubmitButton = styled.button`
background-color: green;
height: 3rem;
width: 7rem;
color: white;
margin: 2rem auto;
bottom: 2rem;
cursor: pointer;
border-radius: 0.5rem;
position: relative;
`;

const FormHeader = styled.span`
font-size: 1rem;
width: 50%;
align-items: center;
color: red;
margin: auto;
padding: 0.5rem;
display: block;
`;

const ErrorMessage = styled.span`
color: red;
font-size: 0.5rem;
font-style: italic;
display: block;
`;