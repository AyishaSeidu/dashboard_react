import styled from '@emotion/styled'
import React from 'react'
import { TableContainer } from '../Styles'

function Photos({data, urlhead}) {
    return (
        <TableContainer>
            {data.map((item)=> {
                return <Image key={item?.id} src={item[urlhead]} />
            })}
        </TableContainer>
    )
}

export default Photos

const Image = styled.img`
display: inline;
margin: 0.2rem;
border-radius: 0.5rem ;
height: 4rem;
width: 4rem;
/* @media (${({theme})=>theme.mediaquery.smallScreens}) {
  height: 20%;
  width: 30%;
} */
`;

