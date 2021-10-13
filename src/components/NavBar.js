import styled from '@emotion/styled'
import React from 'react'

function NavBar() {
    return (
        <NavBarContainer>
            This is the navbar
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