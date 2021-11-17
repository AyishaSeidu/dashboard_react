import styled from '@emotion/styled'
import React from 'react'

function Pagination({setCurrentPage, numOfPages}) {

    let pageNumbers = []
    for(let i=1; i<=numOfPages; i++) {
      pageNumbers.push(i);
    }

    console.log(pageNumbers)
    return (
        <>
        {numOfPages>1 &&
                <Container>
                {pageNumbers.map((num)=>{
                    return<Number key={num} onClick={(e)=>{e.preventDefault(); setCurrentPage(num)}}>{num}</Number>
                })} 
             </Container>
        }

        </>
    )
}

export default Pagination

const Container = styled.div`
grid-area: pagination;
background-color: white;
`;

const Number = styled.span`

`;