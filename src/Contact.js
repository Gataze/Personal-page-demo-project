import styled from "styled-components";
import mapa from "./pomorzany.jpg"

const Contact = () => {
    return ( 
        <ContactWrapper>
            <ContactForm>
                <h1>Formularz kontaktowy</h1>
                <ContactItem placeholder='Imię'></ContactItem>
                <ContactItem placeholder='Nazwisko'></ContactItem>
                <ContactItem placeholder='E-mail'></ContactItem>
                <ContactItem placeholder='Wiadomość'></ContactItem>
                <button>Wyślij</button>
            </ContactForm>
        </ContactWrapper>
     );
}

const ContactWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    height: 90vh;
    background-image: url(${mapa});
    background-size: cover;
    color: white;

    h1 {

        font-size: 36px;
        font-weight: 400;
        align-self: flex-start;
        margin-left: 70px;
        text-transform: uppercase;
    }
`

const ContactForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background: #aaaaaa;
    padding: 20px;
    flex-flow: column;
    border: 2px solid black;
    margin: 80px 60px -60px 0 ;
    opacity: 0.95;

    button {
        width: 30%;
        height: 50px;
        margin: 20px; 
        border-radius: 25px;
        border: none;
        background: #234C50
    }
`

const ContactItem = styled.input`
    width: 80%;
    height: 50px;
    margin: 20px;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    background: #aaaaaa;
    color: black;
    font-size: 20px;
`

 
export default Contact;