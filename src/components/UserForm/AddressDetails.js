import React from 'react';
import {InputBox, FormField, InputLabel} from '../Styles';

function AddressDetails() {
    return (
        <FormField>
            <InputLabel for='street'>Street Name</InputLabel>            
            <InputBox name = 'street' placeholder = 'E.g. Liberation rd.' /> 

            <InputLabel for='suite'>Suite</InputLabel>            
            <InputBox name = 'suite' placeholder = 'E.g Apt. 123' /> 

            <InputLabel for='city'>City</InputLabel>            
            <InputBox name = 'city' placeholder = 'E.g. Accra' /> 

            <InputLabel for='zipcode'>Zipcode</InputLabel>            
            <InputBox name = 'zipcode' placeholder = 'E.g. LB-123-4567' /> 

            <InputLabel for='lat'>Latitude</InputLabel>            
            <InputBox name = 'lat' placeholder = 'E.g. -37.3159' /> 

            <InputLabel for='lng'>Longitude</InputLabel>            
            <InputBox name = 'lng' placeholder = 'E.g. 81.1496' /> 

        </FormField>
    )
}

export default AddressDetails
