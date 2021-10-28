import styled from '@emotion/styled'
import {css, keyframes} from '@emotion/react'
import React, {useState} from 'react';
function NavBar() {

const [expandContent, setExpandContent] = useState(false);
const [selectedItem, setSelectedItem] = useState('');
const [openMenuBar, setOpenMenuBar] = useState(false);
    return (
        <NavBarContainer>
            <SiteHeading > User Engagement Dashboard</SiteHeading>
          

<NavContainer open={openMenuBar} >
    <CloseMenu onClick={(e)=>{e.preventDefault(); setOpenMenuBar(false)}}>X</CloseMenu>

<NavItem style={{border: 'none', fontSize: '1rem'}} id ={'analytics'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('analytics')}} > Analytics</NavItem>

            <ContentToggle expand = {expandContent} onClick={(e)=>{e.preventDefault(); setExpandContent(!expandContent)}} >Content</ContentToggle> 
            {expandContent===true && (
            <>
                
                <NavItem id ={'albums'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('albums')}} >  Albums</NavItem>

                <NavItem id ={'comments'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('comments')}}> Comments</NavItem>

                <NavItem id ={'photos'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('photos')}} > Photos</NavItem>

                <NavItem id ={'posts'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('posts')}}> Posts</NavItem>
                
                <NavItem id ={'todos'} selected={selectedItem}  onClick={(e)=>{e.preventDefault(); setSelectedItem('todos')}}> Todos</NavItem>

                <NavItem id ={'users'} selected={selectedItem} onClick={(e)=>{e.preventDefault(); setSelectedItem('users')}}> Users</NavItem>
            
            </>
            
            )}
            </NavContainer>

<SideToggle onClick={(e)=>{e.preventDefault(); setOpenMenuBar(true)}}>
    <ToggleBar/>
    <ToggleBar/>
    <ToggleBar/>
</SideToggle>
        </NavBarContainer>
    )
}

export default NavBar

const NavBarContainer = styled.div`
background-color: ${({theme})=>theme.colors.secondary};
color:${({theme})=>theme.colors.primary};
grid-area: navbar;

@media(${({theme})=>theme.mediaquery.smallScreens}) {
    
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 10vw;
    grid-template-areas: 
    'navhead contentNav';
}

`;

const NavContainer = styled.div`
cursor: pointer;

//styling for small screens
@media (${({theme})=>theme.mediaquery.smallScreens}) {
    position: fixed;
    right: 0;
    top: 1rem;
    justify-self: right;
    max-height: 100vh;
    min-height: 70vh;
    top: 3rem;
    overflow: auto;
    width: 50vw;
    background-color: inherit;
    display: none;

    //toggling menu bar on small screens
    ${({open})=> open===true && css`
    display: block;
`
}
}
`;

const NavItem = styled.div`
padding: 1rem;
font-size: 0.8rem;
margin-left: 0;
height: 1.2rem;
border-bottom: 0.1rem solid whitesmoke;
border-radius: 0.2rem;

${({id, selected})=> id===selected && css`
  color: #0e1e25;
  background-color: whitesmoke;
`
}
`;

const ContentToggle = styled.div`
cursor: pointer;
padding-top: 1rem;
margin-left: 0;
margin-top: 0;
font-size: 1rem;
::after {
    content: ' \\276F';
    display: inline-block;
    margin-left: 1rem;
    ${({expand})=> expand===true && css`
    transform: rotate(90deg);
`
}
}

`;

const Icon = styled.img`
    width: 30%;
    height: 80%;
    background-color: white;
    padding: 0.2rem;
    display: inline;
    border-radius: 50%;

`;

const SideToggle = styled.div`
display: none;
@media (${({theme})=>theme.mediaquery.smallScreens}) {
    color: white;
    grid-area: contentNav;
padding: 0.2rem;
cursor: pointer;
    display: inherit;
}
`;

const ToggleBar = styled.div`
background-color: white;
margin: 0.1rem;
height: 0.2rem;
`;

const SiteHeading = styled.div`
grid-area: navhead;
border: 0;
font-size: 1rem;
align-self: center;
justify-content: center;
`;

const CloseMenu = styled.div`
display: none;

@media (${({theme})=>theme.mediaquery.smallScreens}) {
    font-size: 1.5rem;
    position: fixed;
    display: inline-block;
    //background-color: red;
    top: 2.8rem;
    right: 0rem;
    color: rgba(250,50,50,0.7);
}
`;

const navAnimation = keyframes`

`;