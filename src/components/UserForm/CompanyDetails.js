import React, { useContext } from 'react';
import {InputBox, InputLabel, FormField, SubmitButton} from '../Styles';
import {FormVariables} from './Form'

function CompanyDetails() {

    const {formData, handleFormInput} = useContext(FormVariables)
    return (
        <FormField>
            <InputLabel for='companyName'>Company Name</InputLabel>            
            <InputBox name = 'companyName' placeholder = 'E.g Google Inc' onChange={(e)=> {handleFormInput(e, ['company', 'name'], e.target.value)}} defaultValue={formData.company.name} /> 

            <InputLabel for='catchPhrase'>Catch Phrase</InputLabel>            
            <InputBox name = 'catchPhrase' placeholder = 'E.g. We know all' onChange={(e)=> {handleFormInput(e, ['company', 'catchPhrase'], e.target.value)}} defaultValue={formData.company.catchPhrase}/> 

            <InputLabel for='bs'>Business Type</InputLabel>            
            <InputBox name = 'bs' placeholder = 'E.g. Tech' onChange={(e)=> {handleFormInput(e, ['company', 'bs'], e.target.value)}} defaultValue={formData.company.bs}/> 

            <SubmitButton>Submit</SubmitButton>
        </FormField>

    )
}

export default CompanyDetails
