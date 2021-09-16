import styled from "styled-components";
import { FaBehance, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <AppFooter>
             <ContactInfo>
                <div>
                    <p>Szczecin</p>
                    <p>Włosciańska 49/10</p>
                    <p>70-021 Szczecin</p>
                </div>
                <div>
                    <p>O mnie</p>
                    <p>Projekty</p>
                    <p>nataliaemiliabrzozowska@gmail.com</p>
                </div>
                <div>
                    <FaInstagram />
                    <FaBehance />
                    <FaLinkedin />
                </div>
            </ContactInfo>
            <CopyRights>
                @All Rights Reserved Marcin Brzozowski 2021
            </CopyRights>
            
        </AppFooter>
     );
}



const AppFooter = styled.footer`
    display: flex;
    flex-flow: column;
    background-color: #98787D;
    color: #333333;
`


const ContactInfo = styled.article`
    display: flex;
    text-align: left;
    margin-left: 35px;
    padding: 25px 0;

    div {
        width: 200px;
        font-size: 16px;
        font-weight: 600;
    }

    div:nth-child(3){
        display: flex;
        font-size: 28px;
        align-items: center;
        justify-content: space-evenly;
        gap: 40px;
        margin: 80px 70px 0 auto;
        
    }
`


const CopyRights = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #234C50;
    padding: 30px 0;
    color: #bbbbbb;
`
 
export default Footer;