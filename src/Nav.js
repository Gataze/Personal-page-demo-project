import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = () => {

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        
        window.scrollTo({
            left: 0,
            top: location
        })
    }

    return ( 
        <NavWrapper>
            <NavList>
                <NavItem>
                    <a onClick={handleClick} href='#home'> strona głowna</a>
                </NavItem>
                <NavItem>
                    <a onClick={handleClick} href='#about'> o mnie.</a>
                </NavItem>
                <NavItem>
                    <a onClick={handleClick} href='#projects'> moje prace</a>
                </NavItem>
                <NavItem>
                    <a onClick={handleClick} href='#contact'> kontakt</a>
                </NavItem>
                <NavItem><FaLinkedin /></NavItem>
                <NavItem><FaInstagram /></NavItem>
            </NavList>
        </NavWrapper>
     );
}

const NavWrapper = styled.nav`
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;   
    
`

const NavList = styled.ul`
    display: flex;
    width: 100%;
    padding: 30px 37px 0;
    list-style-type: none;
    gap: 20px;
       
`


const NavItem = styled.li`
    color: #bbbbbb;
    font-size: 22px;

    &:nth-child(5) {
        margin-left: auto;
    }

    a {
        color: white;
    }
    
`
 
export default Nav;