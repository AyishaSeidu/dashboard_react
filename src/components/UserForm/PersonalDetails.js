import React, {useContext} from 'react';
import {InputBox, FormField, InputLabel} from '../Styles';
import {FormVariables} from './Form'

function PersonalDetails() {

    const {formData, handleFormInput} = useContext(FormVariables);

    return (
        <FormField>
            <InputLabel type ='text' for='fullname'>Full Name</InputLabel>            
            <InputBox name = 'fullname' placeholder = 'E.g Joe Block A' onChange={(e)=> { handleFormInput(e, ['name'], e.target.value)}} defaultValue={formData.name} /> 

            <InputLabel type ='text' for='username'>Username</InputLabel>            
            <InputBox name = 'username' placeholder = 'E.g. joeBA' onChange={(e)=> {handleFormInput(e, ['username'], e.target.value)}} defaultValue={formData.username}  /> 

            <InputLabel type ='text' for='email'>Email Address</InputLabel>            
            <InputBox name = 'email' placeholder = 'E.g. joeba@xxx.com' onChange={(e)=> { handleFormInput(e, ['email'], e.target.value)}} defaultValue={formData.email}  /> 

            <InputLabel type ='text' for='phone'>Phone Number</InputLabel>            
            <InputBox name = 'phone' placeholder = 'E.g. +233 234567890' onChange={(e)=> { handleFormInput(e, ['phone'], e.target.value)}} defaultValue={formData.phone}  /> 

            <InputLabel type ='text' for='website'>Website</InputLabel>            
            <InputBox name = 'website' placeholder = 'E.g. +233 234567890' onChange={(e)=> { handleFormInput(e, ['website'], e.target.value)}} defaultValue={formData.website} /> 

        </FormField>

    )
}

export default PersonalDetails
