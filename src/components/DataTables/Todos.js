import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { TableContainer } from '../Styles'

function Todos({data, taskhead, statushead}) {

    return (
        <TableContainer>
            {data.map((item)=>{
                return <Task key={item?.id} completed={item[statushead]} >{item[taskhead]}</Task>
            })}
        </TableContainer>
    )
}

export default Todos

const Task = styled.div`
width: 100%;
white-space: nowrap;
text-align: left;
padding: 0.5rem;
border-bottom: 0.1rem solid lightgray;
font-size: 0.8rem;

${({completed})=>completed===true && css`
color: lightgray;
text-decoration: line-through;
`
}
`;