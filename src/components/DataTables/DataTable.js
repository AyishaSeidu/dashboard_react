import styled from '@emotion/styled';
import React, { useContext, useState } from 'react'
import { DataContext } from '../Page';
import Pagination from './Pagination';
import Photos from './Photos';
import TextTable from './TextTable';
import Todos from './Todos';

function DataTable() {
const {tableData, query} = useContext(DataContext)
let headers = [];

//pagination set up
const [dataPerPage] = useState(50);
const [currentPage, setCurrentPage] = useState(1);
let startIndex = (currentPage*dataPerPage)-dataPerPage;
let endIndex = currentPage*dataPerPage;
const currentData = tableData.slice(startIndex,endIndex);
const numOfPages = Math.ceil(tableData.length/dataPerPage);

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
            {(query==='albums' || query==='comments' || query==='posts' || query==='users') && <TextTable data={currentData} header={headers} />}
            {query==='photos' && <Photos data={currentData} urlhead='thumbnailUrl'/>}
            {query==='todos' && <Todos data={currentData} taskhead={'title'} statushead={"completed"}/>}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numOfPages={numOfPages} />
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
grid-template-rows: 1fr 3rem;
grid-template-columns: 1fr 1fr;
grid-template-areas:
'table table'
'pagination .';

@media (${({theme})=>theme.mediaquery.smallScreens}) {
grid-template-columns: 1fr;
grid-template-areas: 
'table'
'pagination'; 
}
`;