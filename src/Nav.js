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
                <div>
                <NavItem ><FaLinkedin /></NavItem>
                <NavItem ><FaInstagram /></NavItem>
                </div>
                
            </NavList>
            
        </NavWrapper>
        <Burger>
            <BurgerContainer show={show} onClick={handleShow}>
                <p ></p>
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
    z-index: 1;
    width: 100%;
    transform: ${({show}) => show? 'translateY(-100%)' : 'translateY(0%)'};
    transition: transform 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, .3);
    @media (min-width: 768px) {
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
    @media (min-width: 768px) {
        flex-flow: row;
        margin: 0px auto;
        gap: 20px;
    } 

    div li {
        margin: 10px;
        float: left;
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
            font-size: 25px;
        }

        @media (min-width: 1200px) {
            font-size: 22px;
        }
    }  
`

const Burger = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    width: 40px;
    height: 35px;
    @media (min-width: 768px) {
        top: 20px;
    }
`

const BurgerContainer = styled.div`
    display: flex;
    position: absolute;
    z-index: 2;
    flex-flow: column;
    justify-content: space-between;
    width: 40px;
    height: 35px;
     
    p {
        position: relative;
        width: 40px;
        height: 5px;
        margin: 0;
        transition: ${({show}) => show? 'transform 0.15s ease-in-out, top 0.2s ease-in 0.15s' : 'top 0.15s ease-in-out, transform 0.2s ease-in 0.15s'};
        border-radius: 4px;
        background-color: #dddddd;
    }

    p:nth-child(1) {
        top:  ${({show}) => show? '0px' : '15px'};
        transform: ${({show}) => show? 'rotate(0deg)' : 'rotate(45deg)'};
        
    }

    p:nth-child(2) {
        display: ${({show}) => show? 'block' : 'none'};

    }
    
    p:nth-child(3) {
        top: ${({show}) => show? '0px' : '-15px'};
        transform: ${({show}) => show? 'rotate(0deg)' : 'rotate(135deg)' };

    }
`
 
export default Nav;