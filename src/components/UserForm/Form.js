import styled from '@emotion/styled'
import React, {useState } from 'react';
import axios from 'axios';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import CompanyDetails from './CompanyDetails';

export const FormVariables = React.createContext()

function Form() {

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
console.log(path)
    if (path.length ===0) {
        return;
    }

    else {

        if (!object.hasOwnProperty(path[0])) {
            console.log(`${path[0]} is not a property of the object`);
            return;
        }
        
        else if (path.length===1) {
        object[path[0]] = newValue;
        console.log(formData);
        return;
    }
        else {
        let newObject = object[path[0]];
        path.shift();
        //console.log(newPath)
        setObjectProperty(newObject, path, newValue)
     }

}
  }

  const handleFormInput = (e, path, value) => {
      //console.log(path);
      e.preventDefault();
      setObjectProperty(formData, path, value)
  }

    return (
        <FormVariables.Provider value={{formData, handleFormInput}} >
        <FormContainer>
            <UserForm>
            <PersonalDetails/>
            <AddressDetails/>
            <CompanyDetails/>
        </UserForm>
        </FormContainer>
        </FormVariables.Provider>
    )
}

export default Form

const FormContainer = styled.div`
background-color: white;
margin: auto;
grid-area: content;
width: 100%;
height: 100%;
`;

const UserForm = styled.form`
display: block;
`;