import styled from '@emotion/styled'
import React from 'react'

function NavBar() {
    return (
        <NavBarContainer>
            The navbar goes here.......
        </NavBarContainer>
    )
}

export default NavBar

const NavBarContainer = styled.div`
background-color: turquoise;
grid-area: navbar;
`;