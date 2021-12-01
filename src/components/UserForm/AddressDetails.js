import React, { useContext } from 'react';
import {InputBox, FormField, InputLabel} from '../Styles';
import {FormVariables} from './Form'

function AddressDetails() {
    const {formData, handleFormInput}  = useContext(FormVariables) 
    return (
        <FormField>
            <InputLabel for='street'>Street Name</InputLabel>            
            <InputBox name = 'street' placeholder = 'E.g. Liberation rd.' onChange={(e)=> {handleFormInput(e, ['address', 'street'], e.target.value)}} defaultValue={formData.address.street} /> 

            <InputLabel for='suite'>Suite</InputLabel>            
            <InputBox name = 'suite' placeholder = 'E.g Apt. 123' onChange={(e)=> {; handleFormInput(e, ['address', 'suite'], e.target.value)}} defaultValue={formData.address.suite} /> 

            <InputLabel for='city'>City</InputLabel>            
            <InputBox name = 'city' placeholder = 'E.g. Accra' onChange={(e)=> {; handleFormInput(e, ['address', 'city'], e.target.value)}} defaultValue={formData.address.city} /> 

            <InputLabel for='zipcode'>Zipcode</InputLabel>            
            <InputBox name = 'zipcode' placeholder = 'E.g. LB-123-4567' onChange={(e)=> {; handleFormInput(e, ['address', 'zipcode'], e.target.value)}} defaultValue={formData.address.zipcode} /> 

            <InputLabel for='lat'>Latitude</InputLabel>            
            <InputBox name = 'lat' placeholder = 'E.g. -37.3159' onChange={(e)=> {; handleFormInput(e, ['address','geo', 'lat'], e.target.value)}} defaultValue={formData.address.geo.lat} /> 

            <InputLabel for='lng'>Longitude</InputLabel>            
            <InputBox name = 'lng' placeholder = 'E.g. 81.1496' onChange={(e)=> {; handleFormInput(e, ['address', 'geo', 'lng'], e.target.value)}} defaultValue={formData.address.geo.lng} /> 

        </FormField>
    )
}

export default AddressDetails
