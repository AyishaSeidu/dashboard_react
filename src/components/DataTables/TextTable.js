import { keyframes } from '@emotion/react'
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
            <TableBody>
                {data.map((item)=> {
                    return <TableRow key={item?.id} >
                        {header.map((head)=>{
                            return  <TableData>{item[head]}</TableData>
                        })}
                    </TableRow>
                })}
            </TableBody>
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

const TableData = styled.td`
color: gray;
padding: 0.5rem;
max-height: 0.5rem;
white-space: nowrap;
`;

const TableAnimation = keyframes`
0%{
    opacity: 0;
}

50% {
    opacity: 0.5;
}

100% {
    opacity: 1;
}
`;
const TableBody = styled.tbody`
display: contents;
animation: ${TableAnimation} 2s ease-out;
animation-fill-mode: forwards;

`;


