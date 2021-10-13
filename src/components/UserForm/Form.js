import styled from '@emotion/styled'
import React from 'react'

function Form() {
    return (
        <FormContainer>
            Page Content goes here.......
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