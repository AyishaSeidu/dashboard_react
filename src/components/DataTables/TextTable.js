import styled from '@emotion/styled'
import React from 'react'
import { TableContainer } from '../Styles'

function TextTable({data, header}) {

    return (
        <TableContainer>
        <Table>
        <TableHead><tr>
            {header.map((head)=>{
                return <th key={head}> {head} </th>
            })}
            </tr></TableHead>
            <tbody>
                {data.map((item)=> {
                    return <TableRow key={item?.id} >
                        {header.map((head)=>{
                            return <td> <TableData>{item[head]}</TableData> </td>
                        })}
                    </TableRow>
                })}
            </tbody>
        </Table>
        </TableContainer>
    )
    
}

export default TextTable;




const Table = styled.table`
height: 100%;
width: 100%;
text-align: left;
border-collapse: collapse;
border-radius: 0.5rem;
`;

const TableHead = styled.thead`
text-transform: capitalize;
font-size: 1rem;
background-color: #00c7b6;
align-content: left;
color: white;
font-weight: bold;
position: static;
`;

const TableRow = styled.tr`
overflow: scroll;
align-content: left;
border-bottom: 0.1rem solid #dddddd ;
:last-of-type {
    border-color: #00c7b6;
    border-width: 0.2rem;
}
`;

const TableData = styled.div`
color: gray;
padding: 0.5rem;
max-height: 0.5rem;
white-space: nowrap;
`;

