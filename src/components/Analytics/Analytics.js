import styled from '@emotion/styled'
import React from 'react'

function Analytics() {
    return (
        <AnalyticsContainer>
            Analytics go here
        </AnalyticsContainer>
    )
}

export default Analytics

const AnalyticsContainer = styled.div`
background-color: white;
margin: auto;
grid-area: content;
width: 100%;
height: 100%;
`;