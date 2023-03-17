import Logo from '../imgs/logo-tech.png'

import { Nav, NavImg, NavItem, NavList } from '../styles/StyledNavbar'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <Nav>
            <NavImg src={Logo}/>
            <NavList>
                <Link to='/'><NavItem>Home</NavItem></Link>
                <Link to='/chip'><NavItem>Chip</NavItem></Link>
                <Link to='/glasses'><NavItem>Óculos</NavItem></Link>
                <Link to='/ia'><NavItem>IA</NavItem></Link>
            </NavList>
        </Nav>
    )
}