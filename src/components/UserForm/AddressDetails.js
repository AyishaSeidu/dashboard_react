import React, { useContext } from 'react';
import {InputBox, FormField, InputLabel, FormNav, FormHead} from '../Styles';
import {FormVariables} from './Form'

function AddressDetails() {
    const {formData, handleFormInput, setFormPage}  = useContext(FormVariables) 
    return (
        <FormField>
            <FormHead>Address Details</FormHead>
            <InputLabel >Street Name
            <InputBox name = 'street' type='text' onChange={(e)=> {handleFormInput(e, ['address', 'street'], e.target.value)}} defaultValue={formData.address.street} /> 
            </InputLabel>            
            

            <InputLabel >Suite / Apt. No
            <InputBox name = 'suite'type='text' onChange={(e)=> {; handleFormInput(e, ['address', 'suite'], e.target.value)}} defaultValue={formData.address.suite} /> 
            </InputLabel>            
            

            <InputLabel>City
            <InputBox name = 'city'  type='text' onChange={(e)=> {; handleFormInput(e, ['address', 'city'], e.target.value)}} defaultValue={formData.address.city} /> 
            </InputLabel>            
            

            <InputLabel >Zipcode
            <InputBox name = 'zipcode' type='text' onChange={(e)=> {; handleFormInput(e, ['address', 'zipcode'], e.target.value)}} defaultValue={formData.address.zipcode}/> 
            </InputLabel>            
           

            <InputLabel >Latitude
            <InputBox name = 'lat' type='text' placeholder = '-37.3159' onChange={(e)=> {; handleFormInput(e, ['address','geo', 'lat'], e.target.value)}} defaultValue={formData.address.geo.lat} /> 
            </InputLabel>            
           

            <InputLabel >Longitude
            <InputBox name = 'lng' type='text' placeholder = '81.1496' onChange={(e)=> {; handleFormInput(e, ['address', 'geo', 'lng'], e.target.value)}} defaultValue={formData.address.geo.lng} /> 
            </InputLabel>            


            <FormNav onClick={(e)=> {e.preventDefault(); setFormPage(1)}}>Prev</FormNav>
            <FormNav direction={'next'}  onClick={(e)=> {e.preventDefault(); setFormPage(3)}}>Next</FormNav>
        </FormField>
    )
}

export default AddressDetails
