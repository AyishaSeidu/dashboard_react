import React from 'react';
import {InputBox, FormField, InputLabel} from '../Styles';

function PersonalDetails() {
    return (
        <FormField>
            <InputLabel for='fullName'>Full Name</InputLabel>            
            <InputBox name = 'fullName' placeholder = 'E.g Joe Block A' /> 

            <InputLabel for='username'>Username</InputLabel>            
            <InputBox name = 'username' placeholder = 'E.g. joeBA' /> 

            <InputLabel for='email'>Email Address</InputLabel>            
            <InputBox name = 'email' placeholder = 'E.g. joeba@xxx.com' /> 

            <InputLabel for='phone'>Phone Number</InputLabel>            
            <InputBox name = 'phone' placeholder = 'E.g. +233 234567890' /> 

            <InputLabel for='website'>Website</InputLabel>            
            <InputBox name = 'website' placeholder = 'E.g. +233 234567890' /> 

        </FormField>

    )
}

export default PersonalDetails
