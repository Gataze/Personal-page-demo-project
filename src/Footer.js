import styled from "styled-components";
import { FaBehance, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <AppFooter>
             <ContactInfo>
                <div>
                    <p>Polska, Szczecin</p>
                    <p>Wyszynskiego 10</p>
                    <p>70-021</p>
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
    align-items: center;
    background-color: #98787D;
    color: white;
    font-size: 12px;
    @media (min-width: 992px) {
        font-size: 16px;

    }
`


const ContactInfo = styled.article`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1440px;
    margin:  25px 35px;
    padding: 25px 20px;
    text-align: left;
    gap: 10px;

    div {
        width: 220px;
        padding: 0 10px;
        font-size: 14px;
        font-weight: 400;
        @media (min-width: 992px) {
            font-size: 16px;
            font-weight: 600;
        }

        p {
            margin: 5px 0;
        }
       
    }

    div:nth-child(3) {
        display: flex;
        justify-content: flex-start;
        font-size: 28px;
        gap: 20px;
        @media (min-width: 992px) {
            gap: 40px;
            align-items: flex-end;
            justify-content: space-evenly;
            margin-left: auto;
        }
        
    }
`

const CopyRights = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 0;
    background-color: #234C50;
    color: #bbbbbb;
`
 
export default Footer;