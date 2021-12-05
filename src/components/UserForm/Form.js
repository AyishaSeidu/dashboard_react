import React, {useState, useContext } from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react'
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import {DataAnimation} from '../Styles'
import {DataContext} from '../Page'
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import CompanyDetails from './CompanyDetails';

export const FormVariables = React.createContext()

function Form() {
 const {setInputMode} = useContext(DataContext) 
const [submitting, setSubmitting] = useState(false);
const [formPage, setFormPage] = useState(1);
const [submitted, setSubmitted] = useState(false);
const [formData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const setObjectProperty = (object={}, path=[], newValue) => {
    if (path.length ===0) {
        return;
    }

    else {

        if (!object.hasOwnProperty(path[0])) {
            console.log('path does not exist');
            return;
        }
        
        else if (path.length===1) {
        object[path[0]] = newValue;
        return;
    }
        else {
        let newObject = object[path[0]];
        path.shift();
        setObjectProperty(newObject, path, newValue)
     }

}
  }

  const handleFormInput = (e, path, value) => {
      e.preventDefault();
      setObjectProperty(formData, path, value)
  }
//checking for empty inputs
const checkInputFields = (fieldname, actionValue) => {
 let field =  document.getElementById(fieldname);
 let inputs = field.getElementsByTagName('input');
 let allFieldsCompleted=true;
 
 for (let i=0; i<inputs.length; i++) {
   if (inputs[i].value==='') {
     inputs[i].style.borderColor='red';
     allFieldsCompleted=false;
   }
 }

 if (allFieldsCompleted && actionValue!=='submit') {
   setFormPage(actionValue);
 }
 else if (allFieldsCompleted && actionValue==='submit') {
  submitForm('https://jsonplaceholder.typicode.com/users', formData)
 }
 else {
   alert('Please fill all required fields')
   setFormPage(formPage)
 }

}

//submitting form
const submitForm = (url, data) => {
setSubmitting(true);
try {
axios.post(url, data)
.then((res)=> {
  console.log(res.status)
setSubmitting(false);
setSubmitted(true)
})
}

catch (error) {
console.log(error);
setSubmitting(false);
}

}

    return (
 
        <FormVariables.Provider value={{formData,checkInputFields, handleFormInput, submitForm, setFormPage}} >
        <FormContainer>
        {submitting ? (<SubmitMessage>
          <span>Submitting</span>
            <BeatLoader/>
            </SubmitMessage>): ( 
          <>
          {submitted ? (
          <>
          <SubmitMessage >User sucessfully added</SubmitMessage>
          <SubmitMessage type={'submitted'} onClick={(e)=>{ setSubmitted(false); setInputMode(false)}}> {`<< Back to users`}</SubmitMessage>
          </>
          ) : (
            <>
            <UserForm onSubmit={(e)=> {e.preventDefault(); checkInputFields('company','submit')}}>
            <ProgressBar> 

            <FormComponent id={1} selected={formPage} onClick={(e)=>{e.preventDefault(); setFormPage(1)}}>Personal Details</FormComponent>

            <FormComponent id={2} selected={formPage}  onClick={(e)=>{e.preventDefault(); setFormPage(2)}}>Address Details</FormComponent>

            <FormComponent id={3} selected={formPage}  onClick={(e)=>{e.preventDefault(); setFormPage(3)}}>Company Details</FormComponent>

             </ProgressBar>

            {formPage===1 && <PersonalDetails/>}
            {formPage===2 && <AddressDetails/>}
            {formPage===3 && <CompanyDetails/>}
        </UserForm>
            </>
          )}

        </>
        )
}
        </FormContainer>

        </FormVariables.Provider>
     
    )
}

export default Form

const FormContainer = styled.div`
background-color: white;
margin: auto;
border-radius: 0.3rem;
grid-area: content;
text-align: left;
font-size: 0.7rem;
width: 70%;
height: 95%;
overflow: auto;
animation: ${DataAnimation} 2s ease-in forwards;
@media (${({ theme }) => theme.mediaquery.smallScreens}) {
height: 80%;
  }
`;

const UserForm = styled.form`
display: block;
`;

const ProgressBar = styled.div`
display: flex;
flex-direction: row;
overflow: auto;
`
const FormComponent = styled.span`
margin: 1rem auto;
cursor: pointer;
${({id, selected})=> id===selected && css`
color: #00c7b6;
`}
`
const SubmitMessage = styled.div`
margin: auto;
margin-top: 12rem;
text-align: center;
font-size: 1rem;

${({type})=> type==='submitted' && css`
cursor: pointer;
background-color: lightgrey;
border: 0.1rem solid grey;
border-radius: 0.3rem;
width: 10rem;
margin-top: 1rem;
font-style: italic;
`}
`