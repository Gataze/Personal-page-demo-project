
import { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';


const Nav = () => {

    const [show, setShow] = useState(true)


    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        
        window.scrollTo({
            left: 0,
            top: location
        })
    }


    const handleShow = () => {
        setShow(prevState => 
            prevState = !prevState
            )
    }



    return ( 
        <>
        <NavWrapper show={show}>
            <NavList>
                <NavItem >
                    <a onClick={handleClick} href='#home'> strona głowna</a>
                </NavItem>
                <NavItem >
                    <a onClick={handleClick} href='#about'> o mnie</a>
                </NavItem>
                <NavItem >
                    <a onClick={handleClick} href='#projects'>projekty</a>
                </NavItem>
                <NavItem >
                    <a onClick={handleClick} href='#contact'> kontakt</a>
                </NavItem>
                <NavItem ><FaLinkedin /></NavItem>
                <NavItem ><FaInstagram /></NavItem>
            </NavList>
            
        </NavWrapper>
        <Burger>
            <BurgerContainer onClick={handleShow}>
                <p></p>
                <p></p>
                <p></p>
            </BurgerContainer>
        </Burger>
        </>
     );
}





const NavWrapper = styled.nav`
    display: flex;
    position: absolute;
    transform: ${({show}) => show? 'translateY(-100%)' : 'translateY(0%)'};
    z-index: 1;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    @media (min-width: 576px) {
        position:  fixed;
        align-items: center;
        height: 70px;
    } 
    
`

const NavList = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    margin: 20px auto;
    padding: 0px 10px 0;
    list-style-type: none;
    gap: 30px;
    @media (min-width: 576px) {
        flex-flow: row;
        margin: 0px auto;
        gap: 20px;
    } 
    
`

const NavItem = styled.li`
    display: flex;
    align-items: flex-end;
    transition: transform .3s ease-in-out;
    color: #bbbbbb;
    font-size: 15px;

    &:nth-child(5) {
        @media (min-width: 992px) {
            margin-left: auto;
        }
    }

    a, svg {
        color: white;
        font-size: 20px;
        text-decoration: none;

        @media (min-width: 576px) {
            font-size: 22px;
        }

        @media (min-width: 1200px) {
            font-size: 22px;
        }
    }  
`


const Burger = styled.div`
    position: absolute;
    width: 40px;
    height: 35px;
    right: 15px;
    top: 15px;
    
`

const BurgerContainer = styled.div`
    position: absolute;
    z-index: 2;
    width: 40px;
    height: 35px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    

    p {
        margin: 0;
        width: 40px;
        height: 5px;
        background-color: #dddddd;
        border-radius: 4px;
    }
`
 
export default Nav;