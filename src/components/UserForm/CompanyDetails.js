import React, { useContext } from 'react';
import {InputBox, InputLabel, FormField, SubmitButton, FormNav} from '../Styles';
import {FormVariables} from './Form'

function CompanyDetails() {

    const {formData, handleFormInput, setFormPage} = useContext(FormVariables)
    return (
        <FormField id='page3'>
            
            <InputLabel >Company Name *
            <InputBox name = 'companyName' type='text' onChange={(e)=> {handleFormInput(e, ['company', 'name'], e.target.value)}} defaultValue={formData.company.name} />
            </InputLabel>            
             

            <InputLabel>Catch Phrase / Slogan *
            <InputBox name = 'catchPhrase' type='text' onChange={(e)=> {handleFormInput(e, ['company', 'catchPhrase'], e.target.value)}} defaultValue={formData.company.catchPhrase}/> 
            </InputLabel>            
            

            <InputLabel>Business Type / Industry *
            <InputBox name = 'bs' type='text' onChange={(e)=> {handleFormInput(e, ['company', 'bs'], e.target.value)}} defaultValue={formData.company.bs}/> 
            </InputLabel>            
           

            <FormNav onClick={(e)=> {e.preventDefault(); setFormPage(2)}}>Prev</FormNav>

            <SubmitButton type='submit' value='Submit'/>
        </FormField>

    )
}

export default CompanyDetails
