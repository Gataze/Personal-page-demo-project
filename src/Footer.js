import styled from "styled-components";


const Footer = () => {
    return ( 
        <AppFooter>
            @All Rights Reserved Marcin Brzozowski 2021
        </AppFooter>
     );
}



const AppFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    padding: 30px;
    background-color: #98787D;
    color: #333333;
`
 
export default Footer;