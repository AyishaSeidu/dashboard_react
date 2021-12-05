import styled from '@emotion/styled'
import {css, keyframes} from '@emotion/react'
import React, {useContext, useState} from 'react';
import {Music, MessageCircle, Camera, FileText, List, Users, BarChart2, Menu,X} from 'react-feather'
import { DataContext } from './Page';

function NavBar() {
let {setQuery, query} = useContext(DataContext)
const [expandContent, setExpandContent] = useState(false);
const [openMenuBar, setOpenMenuBar] = useState(false);

const handleNavSelection =(e, selectedItem) => {
e.preventDefault();
setQuery(selectedItem);
}
    return (
        <NavBarContainer onClick={(e)=>e.preventDefault()}>
            <SiteHeading > User Engagement Dashboard</SiteHeading>
          

<NavContainer animation={showNavAnimation} open={openMenuBar} onClick={(e)=>e.preventDefault()} >
<NavItem style={{fontSize: '1rem'}} id ={'analytics'} selected={query} onClick={(e)=>{handleNavSelection(e, 'analytics')}} > <BarChart2 size={20}/> Analytics</NavItem>

            <ContentToggle expand = {expandContent} onClick={(e)=>{e.preventDefault(); setExpandContent(!expandContent)}} >Content</ContentToggle> 
            
            <Options expandContent={expandContent} >
                <NavItem id ={'albums'} selected={query} onClick={(e)=>{handleNavSelection(e, 'albums')}} > <Music size={20} />Albums</NavItem>

                <NavItem id ={'comments'} selected={query} onClick={(e)=>{handleNavSelection(e, 'comments')}}> <MessageCircle size={20} /> Comments</NavItem>

                <NavItem id ={'photos'} selected={query} onClick={(e)=>{handleNavSelection(e, 'photos')}} >  <Camera size={20} /> Photos</NavItem>

                <NavItem id ={'posts'} selected={query} onClick={(e)=>{handleNavSelection(e, 'posts')}}>  <FileText size={20} /> Posts</NavItem>
                
                <NavItem id ={'todos'} selected={query}  onClick={(e)=>{handleNavSelection(e, 'todos')}}>  <List size={20} /> Todos</NavItem>

                <NavItem id ={'users'} selected={query} onClick={(e)=>{handleNavSelection(e, 'users')}}>  <Users size={20} /> Users</NavItem>
            
            </Options>
        
            </NavContainer>

<SideToggle onClick={(e)=>{e.preventDefault(); setOpenMenuBar(!openMenuBar)}} >
    {
        openMenuBar ? (
            <X size={27} />
    ) : (
<Menu size={27}/>
    )
    }
    
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

//animation for nav item
const showNavAnimation = keyframes`
0% {
    transform: translateX(20rem);
}
100% {
    transform: translateX(1rem);

};
`;

const NavContainer = styled.div`
cursor: pointer;
//styling for small screens
@media (${({theme})=>theme.mediaquery.smallScreens}) {
    position: absolute;
    right: 0;
    top: 3rem;
    justify-self: right;
    height: 0;
    width: auto;
    background-color: inherit;
    overflow: hidden;
    transition: height 1s ease-in;

    //toggling menu bar on small screens
    ${({open})=> open===true && css`
    height: 70vh;
    overflow: auto;
`
}
}
`;

const NavItem = styled.span`
padding: .8rem;
font-size: 0.7rem;
margin-left: 2rem;
display: flex;
flex-direction: row;
gap: .1rem;
align-items: center;
align-self: center;
${({id, selected})=> id===selected && css`
  color: #00c7b6;
`
}
`;

const ContentToggle = styled.div`
cursor: pointer;
padding: 1rem 0rem;
font-size: 1rem;
margin-left: -3rem;
display: block;
::after {
    content: ' \\276F';
    display: inline-block;
    margin-left: 1rem;
    transition: transform 1s ease-in;
    ${({expand})=> expand===true && css`
    transform: rotate(90deg);
`
}
}

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

const SiteHeading = styled.div`
grid-area: navhead;
background-color: #00c7b6;
padding: 0.5rem 0;
border: 0;
font-size: 0.8rem;
align-self: center;
justify-content: center;
@media (${({theme})=>theme.mediaquery.smallScreens}) {
font-size: 1rem;
}

`;

const Options = styled.div`
visibility: hidden;
opacity: 0;
transition: visibility 1.5s ease-in, opacity 1.5s ease-in;

${({expandContent})=> expandContent===true && css`
visibility: visible;
opacity: 1;
`}
`;

