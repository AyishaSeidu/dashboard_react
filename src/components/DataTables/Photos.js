import styled from '@emotion/styled'
import React from 'react'
import { TableContainer } from '../Styles'

function Photos({data, urlhead}) {
    return (
        <TableContainer>
            {data.map((item)=> {
                return <Image src={item[urlhead]} />
            })}
        </TableContainer>
    )
}

export default Photos

const Image = styled.img`
margin: 0.2rem;
border-radius: 0.5rem ;
`;

