import React from 'react';
import {InputBox, InputLabel, FormField} from '../Styles';


function CompanyDetails() {
    return (
        <FormField>
            <InputLabel for='companyName'>Company Name</InputLabel>            
            <InputBox name = 'companyName' placeholder = 'E.g Google Inc' /> 

            <InputLabel for='catchPhrase'>Catch Phrase</InputLabel>            
            <InputBox name = 'catchPhrase' placeholder = 'E.g. We know all' /> 

            <InputLabel for='bs'>Business Type</InputLabel>            
            <InputBox name = 'bs' placeholder = 'E.g. Tech' /> 
        </FormField>

    )
}

export default CompanyDetails
