import styled from '@emotion/styled'
import React from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import GeographicDetails from './GeographicDetails';
import CompanyDetails from './CompanyDetails';

function Form() {


    return (
        <FormContainer>
            <UserForm>
            <PersonalDetails/>
            <ContactDetails/>
            <GeographicDetails/>
            <CompanyDetails/>
        </UserForm>
        </FormContainer>
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

`;