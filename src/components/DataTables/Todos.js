import styled from '@emotion/styled'
import React from 'react'
import { TableContainer } from '../Styles'

function Todos({data, taskhead, statushead}) {
    return (
        <TableContainer>
            {data.map((item)=>{
                return <Task key={item?.id} status={item[statushead]} >{item[taskhead]}</Task>
            })}
        </TableContainer>
    )
}

export default Todos

const Task = styled.div`

`;