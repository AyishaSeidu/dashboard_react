import styled from '@emotion/styled'
import {css} from '@emotion/react'
import React, {useState} from 'react';

function NavBar() {

const [expandContent, setExpandContent] = useState(false);
const [selectedItem, setSelectedItem] = useState('');

    return (
        <NavBarContainer>
            <div> User Engagement Dashboard</div>
            <NavContainer>
                <NavItem style={{border: 'none', fontSize: '1rem'}} id ={'analytics'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('analytics')}} > Analytics</NavItem>
            </NavContainer>

            <ContentToggle expand = {expandContent} onClick={(e)=>{e.preventDefault(); setExpandContent(!expandContent)}} >Content</ContentToggle> 
            {expandContent===true && (
            <>
                <NavContainer>
                <NavItem id ={'albums'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('albums')}} > Albums</NavItem>

                <NavItem id ={'comments'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('comments')}}>Comments</NavItem>

                <NavItem id ={'photos'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('photos')}}>Photos</NavItem>

                <NavItem id ={'posts'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('posts')}}>Posts</NavItem>
                
                <NavItem id ={'todos'} selected={selectedItem}  onClick={(e)=>{e.preventDefault(); setSelectedItem('todos')}}>Todos</NavItem>

                <NavItem id ={'users'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('users')}}>Users</NavItem>
            </NavContainer>
            </>
            )}

        </NavBarContainer>
    )
}

export default NavBar

const NavBarContainer = styled.div`
background-color: ${({theme})=>theme.colors.secondary};
grid-area: navbar;
width: 100vw;
height: 100%;
color:${({theme})=>theme.colors.primary};
@media (${({theme})=>theme.mediaquery.largeScreens}) {
 height: 100vh;
 width: 100%;
}
`;

const NavContainer = styled.ul`
list-style-type: none;
padding: 0;
cursor: pointer;

`;
const NavItem = styled.li`
padding: 1rem;
margin-left: 0;
border-bottom: 0.1rem solid whitesmoke;
border-radius: 0.2rem;
text-align: left;
${({id, selected})=> id===selected && css`
  color: black;
  background-color: whitesmoke;
`
}
`;

const ContentToggle = styled.span`
cursor: pointer;
padding-top: 1rem;
margin-left: 0;
::after {
    content: ' \\276F';
    display: inline-block;
    margin-left: 1rem;
    ${({expand})=> expand===true && css`
    transform: rotate(90deg);
  //color: red;
`
}
}

`;

const ArrowToggle = styled.span`


::after {
    content: ' \\276F';
    display: inline-block;
    ${(expand)=> expand===true && css`
    transform: rotate(180deg);
    padding: 0.5rem;`
}
}
`;