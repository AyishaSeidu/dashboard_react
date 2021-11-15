import styled from '@emotion/styled';
import React, { useContext } from 'react'
import { DataContext } from '../Page';
import Photos from './Photos';
import TextTable from './TextTable';

function DataTable() {
const {tableData, query} = useContext(DataContext)
let headers = [];

if (query==='albums') {
    headers = ["title"];
}

else if (query==='comments') {
    headers = ['body'];
}
else if (query==='posts') {
    headers =['title', 'body'];
}
else if (query ==='todos') {
    headers = ['title'];
}
else if (query==='users') {
    headers=['name', 'username', 'email', 'phone', 'website']
}
else {
    headers=[];
}

    return (
        <TableContainer>
            {(query==='albums' || query==='comments' || query==='posts' || query==='users') && <TextTable data={tableData} header={headers} />}
            {query==='photos' && <Photos data={tableData} urlhead='thumbnailUrl'/>}
        </TableContainer>
    )
}

export default DataTable
const TableContainer = styled.div`
margin: auto;
overflow: auto;
grid-area: content;
width: 100%;
height: 100%;
display: grid;
grid-template-rows: 1fr 1.5rem;
grid-template-areas:
'table'
'pagination';
`;