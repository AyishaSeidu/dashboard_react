import { css } from '@emotion/react';
import styled from '@emotion/styled'
import React, {useState} from 'react'

function Pagination({currentPage, setCurrentPage, numOfPages}) {
    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(5)

    let pageNumbers = []
    for(let i=1; i<=numOfPages; i++) {
      pageNumbers.push(i);
    }
    
    let Nums = pageNumbers.slice(first, last)

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
//toggling first and last pages
const toggleEnds = (e, end) => {
    e.preventDefault();
    if (end==='first') {
        setCurrentPage(1);
        setFirst(0);
        setLast(5);
    }

    else if (end==='last' && pageNumbers.length>=5)  {
        setCurrentPage(pageNumbers.length);
        setLast(pageNumbers.length);
        setFirst(pageNumbers.length-5);
    }

    else {
        setCurrentPage(pageNumbers.length)
    }
}

    return (
        <>
        {numOfPages>1 &&
                <Container>
                    <Toggle type="first" currentPage={currentPage} lastPage={pageNumbers.length} onClick={(e)=> toggleEnds(e, 'first') } >First</Toggle>
                    <PaginationNav type="prev" currentPage={currentPage} lastPage={pageNumbers.length} onClick={(e)=>{ handleNavClick(e,'prev')}} />
                {Nums.map((num)=>{
                    return<Number key={num} active={currentPage} thisNum={num} onClick={(e)=>{e.preventDefault(); setCurrentPage(num)}}>{num}</Number>
                })} 
                <PaginationNav type="next" currentPage={currentPage} lastPage={pageNumbers.length}  onClick={(e)=>{ handleNavClick(e,'next')}}/>
                <Toggle type="last" currentPage={currentPage} lastPage={pageNumbers.length} onClick={(e)=> toggleEnds(e, 'last')}>Last</Toggle>
             </Container>
        }

        </>
    )
}

export default Pagination

const Container = styled.span`
grid-area: pagination;
font-size: .7rem;
display: inline;
width: auto;
height: 50%;
align-self: initial;
justify-self: center;
`;

const Number = styled.span`
padding: .2rem;
margin: .5rem;
cursor: pointer; 
height: 100%;
width: 10px;
${({active,thisNum})=> active===thisNum && css`::after
    border-radius: 50%;
    color: white;
    background-color: #00c7b6;
    border: 0.1rem solid #00c7b6;
    border-radius: 20%;
`}
:hover {
border: 0.05rem solid #00c7b6;
}
`;

const PaginationNav=styled.span`
//previous button
${({type})=> type==='prev' && css`
::after {
    content: ' \\276E';
}
`}
${({currentPage, type})=>type ==='prev' && currentPage===1 && css`
display: none;
`}
//next button
${({type})=> type==='next' && css`
::after {
    content: ' \\276F';
}`}

${({currentPage, lastPage, type})=>type ==='next' && currentPage===lastPage && css`
display: none;
`}

padding: .5rem;
cursor: pointer;
`;

const Toggle = styled.span`
cursor: pointer;
border: .01rem solid black;
padding: .1rem;
${({currentPage, type})=>type ==='first' && currentPage===1 && css`
display: none;
`}
${({currentPage, lastPage, type})=>type ==='last' && currentPage===lastPage && css`
display: none;
`}
`;