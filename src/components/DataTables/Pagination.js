import { css } from '@emotion/react';
import styled from '@emotion/styled'
import React, {useState} from 'react'

function Pagination({currentPage, setCurrentPage, numOfPages}) {
    const [first, setFirst] = useState(1)
    const [last, setLast] = useState(5)

    let pageNumbers = []
    for(let i=1; i<=numOfPages; i++) {
      pageNumbers.push(i);
    }
    
    let Nums = pageNumbers.slice(first-1, last)

    //handling the next and prev buttons
    const handleNavClick = (e, navType) => {
        e.preventDefault();
        if (currentPage+1>last && navType==='next' && last+5<=pageNumbers.length) {
            setLast(last+5);
            setFirst(first+5)
        } 

        else if (currentPage-1<first && navType==='prev' && first-5>=1) {
           setFirst(first-5)
           setLast(last-5)
        }

       if (currentPage<numOfPages && navType==='next') {
            setCurrentPage(currentPage+1)
        } 

        else if (currentPage>1 && navType==='prev') {
           setCurrentPage(currentPage-1)
        }


    }

    console.log(pageNumbers)
    return (
        <>
        {numOfPages>1 &&
                <Container>
                    <PaginationNav type="prev" onClick={(e)=>{ handleNavClick(e,'prev')}} />
                {Nums.map((num)=>{
                    return<Number key={num} active={currentPage} thisNum={num} onClick={(e)=>{e.preventDefault(); setCurrentPage(num)}}>{num}</Number>
                })} 
                <PaginationNav type="next" onClick={(e)=>{ handleNavClick(e,'next')}}/>
             </Container>
        }

        </>
    )
}

export default Pagination

const Container = styled.span`
grid-area: pagination;
//background-color: white;
display: inline;
width: auto;
height: 50%;
align-self: initial;
justify-self: center;
`;

const Number = styled.span`
padding: .2rem;
margin: .8rem;
cursor: pointer; 
height: 100%;
width: 10px;
font-size: .7rem;
${({active,thisNum})=> active===thisNum && css`::after
    border-radius: 50%;
    color: white;
    background-color: #00c7b6;
    border: 0.1rem solid #00c7b6;
    border-radius: 20%;
`}
`;

const PaginationNav=styled.span`
//previous button
${({type})=> type==='prev' && css`
::after {
    content: ' \\276E';
}
`}
//next button
${({type})=> type==='next' && css`
::after {
    content: ' \\276F';
}
`}
padding: .5rem;
cursor: pointer;
font-size: .7rem;
`;