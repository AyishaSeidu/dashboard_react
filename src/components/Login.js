import styled from '@emotion/styled'
import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (username, password) =>{
        alert(`username: ${username} password: ${password}`)
    }
    return (
        <FormContainer>
            <Form onSubmit={(e)=>{e.preventDefault(); signIn(username, password)}}>
                <span> Sign In </span>
                <InputLabel>
                <InputField type='text' placeholder='username' onChange={(e)=>{e.preventDefault(); setUsername(e.target.value)}} />
                </InputLabel>

                <InputLabel>
                <InputField type='password' placeholder='password' onChange={(e)=>{e.preventDefault(); setPassword(e.target.value)}}/>
                </InputLabel>
                <SubmitButton value='Login' type='submit'/>
            </Form>
        </FormContainer>
    )
}

export default Login

const FormContainer= styled.div`
border: 0.2rem solid black;
background-color: white;
margin: auto;
display: block;
`;
const Form = styled.form`
//margin: auto;
//border: 0.5rem solid grey;
`

const InputField = styled.input``;

const InputLabel = styled.label`
`
const SubmitButton = styled.input``;
