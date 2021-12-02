import styled from '@emotion/styled'
import React, {useState } from 'react';
import axios from 'axios';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import CompanyDetails from './CompanyDetails';

export const FormVariables = React.createContext()

function Form() {
const [submitting, setSubmitting] = useState(false);
const [formPage, setFormPage] = useState(1);
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

//submitting form
const submitForm = (url, data) => {
setSubmitting(true);
console.log(data)
try {
axios.post(url, data)
.then((res)=> {
console.log(res);
setSubmitting(false);
})
}

catch (error) {
console.log(error);
setSubmitting(false);
}

}

    return (
    <>
    {submitting ? (<div>Submitting...</div>): 

    (
        <>
        <FormVariables.Provider value={{formData, handleFormInput, submitForm, setFormPage}} >
        <FormContainer>
            <UserForm>
            {formPage===1 && <PersonalDetails/>}
            {formPage===2 && <AddressDetails/>}
            {formPage===3 && <CompanyDetails/>}
        </UserForm>
        </FormContainer>
        </FormVariables.Provider>

        </>
    )
    
}


        </>
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
`;

const UserForm = styled.form`
display: block;
`;