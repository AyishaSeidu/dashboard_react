import styled from '@emotion/styled';
import {css} from '@emotion/react'
import React, {useState} from 'react'

function Login( {appUsers, setLoggedIn, setCurrentUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongUsername, setWrongUsername] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false)

    const signIn = (username, password) =>{
        //check if the user details supplied exists in the appUsers list
        setWrongPassword(false);
        setWrongUsername(false);
        if (!appUsers.some((user)=>user.username===username)) {
           //alert('incorrect username and password');
           setWrongUsername(true)
            return;
        }

        else if (appUsers.some((user)=>user.username===username) && !appUsers.some((user)=>user.password===password)) {
       setWrongPassword(true)
       return;
        }

        else if (appUsers.some((user)=>user.username===username && user.password===password)) {
            setCurrentUser({username, password});
            setLoggedIn(true)
        }
        else {
            alert('user not found')
            return;
        }
    }


    return (


       <>
           
            <Form onSubmit={(e)=>{e.preventDefault(); signIn(username, password)}}>
            <FormHeader> Sign In </FormHeader>
               {wrongUsername && <ErrorMessage>Incorrect username, please try again</ErrorMessage>} 
               {wrongPassword && <ErrorMessage>Incorrect password, please try again</ErrorMessage>}
                <InputField type='text' placeholder='username' onChange={(e)=>{e.preventDefault(); setUsername(e.target.value)}} wrongEntry={wrongUsername}/>
        
                <InputField type='password' placeholder='password' onChange={(e)=>{e.preventDefault(); setPassword(e.target.value)}} wrongEntry={wrongPassword} />
         
                <SubmitButton value='Login' type='submit'/>
            </Form>
       </>
    )
}

export default Login

const Form = styled.form`
margin: auto;
border: 0.1rem solid lightgrey;
width: 70%;
height: 50%;
padding: 1rem;
margin-top: 10%;
grid-area: content;
background-color: white;
@media(${({theme})=>theme.mediaquery.largeScreens1}) {
width: 30%;
height: 50%;
margin-left: 30%;
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

const SubmitButton = styled.input`
background-color: green;
height: 3rem;
width: 7rem;
color: white;
margin: auto;
bottom: 2rem;
cursor: pointer;
border-radius: 0.5rem;
`;

const FormHeader = styled.div`
font-size: 1rem;
width: 50%;
align-items: center;
color: red;
margin: auto;
padding: 0.5rem;
`;

const ErrorMessage = styled.span`
color: red;
font-size: 0.5rem;
font-style: italic;
`;