import {Nav, NavItem, Navbar, NavLink} from 'reactstrap'

function Header () {
    return (
        <>
            <Navbar dark expand="md" className='navbar'>
                <Nav navbar>
                    <NavItem>
                        <NavLink>home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )

}

export default Header;