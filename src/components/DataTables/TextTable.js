import styled from '@emotion/styled'
import React from 'react'

function TextTable({data, header}) {

    return (
        <Container>
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
        </Container>
    )
    
}

export default TextTable;

const Container = styled.div`
height: 90%;
width: 80%;
background-color: white;
margin: auto;
grid-area: table;
overflow: auto;
font-size: 0.7rem;
border-width: 0 0 0.2rem 0;
border-color: #00c7b6;
`;


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

