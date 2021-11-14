import styled from '@emotion/styled'
import React from 'react'

function TextTable({data, header}) {

    return (
        <>
        <thead><tr>
            {header.map((head)=>{
                return <TableHead key={head}> {head} </TableHead>
            })}
            </tr></thead>
            <TableBody>
                {data.map((item)=> {
                    return <TableRow key={item?.id} >
                        {header.map((head)=>{
                            return <TableData>{item[head]}</TableData>
                        })}
                    </TableRow>
                })}
            </TableBody>
        </>
    )
}

export default TextTable

const TableBody = styled.table``;

const TableHead = styled.th``;
const TableRow = styled.tr``;

const TableData = styled.td``;