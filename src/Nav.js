import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = () => {

    return ( 
        <NavWrapper>
            <NavList>
                <NavItem>ILLUSTRATIONS</NavItem>
                <NavItem>3D</NavItem>
                <NavItem>BOOKS</NavItem>
                <NavItem>ABOUT</NavItem>
                <NavItem><FaLinkedin /></NavItem>
                <NavItem><FaInstagram /></NavItem>
            </NavList>
        </NavWrapper>
     );
}

const NavWrapper = styled.nav`
    display: flex;
    position: absolute;
    z-index: 1;
    width: 100%;
    
`

const NavList = styled.ul`
    display: flex;
    width: 100%;
    padding: 40px 60px;
    list-style-type: none;
    gap: 20px;
       
`


const NavItem = styled.li`
    color: #cccccc;
    font-size: 20px;

    &:nth-child(5) {
        margin-left: auto;
    }
    
`
 
export default Nav;