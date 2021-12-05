import React, {useContext} from 'react';
import {InputBox, FormField, InputLabel, FormNav} from '../Styles';
import {FormVariables} from './Form'

function PersonalDetails() {

    const {formData, checkInputFields, handleFormInput} = useContext(FormVariables);

    return (
        <FormField id='personal'>
            <InputLabel >Full Name *
            <InputBox id= 'fullname' type='text' onChange={(e)=> { handleFormInput(e, ['name'], e.target.value)}} defaultValue={formData.name} /> 
            </InputLabel>            
            

            <InputLabel >Preferred Username *
            <InputBox id= 'username' type ='text' onChange={(e)=> {handleFormInput(e, ['username'], e.target.value)}} defaultValue={formData.username}  /> 
            </InputLabel>            
            

            <InputLabel  >Email Address *
            <InputBox id= 'email' type='email' onChange={(e)=> { handleFormInput(e, ['email'], e.target.value)}} defaultValue={formData.email}  /> 
            </InputLabel>            
            

            <InputLabel >Phone Number *
            <InputBox id= 'phone' type ='text' placeholder = '+233 234567890' onChange={(e)=> { handleFormInput(e, ['phone'], e.target.value)}} defaultValue={formData.phone} /> 
            </InputLabel>            
           

            <InputLabel>Website *
            <InputBox id= 'website' type ='text' onChange={(e)=> { handleFormInput(e, ['website'], e.target.value)}} defaultValue={formData.website} /> 
            </InputLabel>
                        
            
        <FormNav direction={'next'} onClick={(e)=> {e.preventDefault(); checkInputFields('personal',2)}}>Next</FormNav>
        </FormField>

    )
}

export default PersonalDetails
