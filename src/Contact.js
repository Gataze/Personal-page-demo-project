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
    position: relative;
   
    height: 80vh;
    background-image: url(${mapa});
    background-size: cover;
    color: white;

    h1 {
        align-self: flex-start;
        margin-left: 70px;
        font-size: 36px;
        font-weight: 400;     
        text-transform: uppercase;
    }

    &:before, &:after {
      position: absolute;
      width: 1093px;
      height: 400px;
      opacity: 0.1;
      color: black;
      font-size: 96px;
      font-weight: 800;
      text-align: left;
  @media (min-width: 768px) {
      font-size: 126px;
  }
  @media (min-width: 1200px) {
      font-size: 176px;
  }
}

&:after {
  content: 'CONTACT';
  z-index: 0;
  bottom: -40px;
  left: 10px;
 
  @media (min-width: 768px) {
    bottom: -7%;
  }
  @media (min-width: 1200px) {
    bottom: -150px;
  }
}

`

const ContactForm = styled.form`
    display: flex;
    position: relative;
    z-index: 2;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin: 80px 80px -60px auto ;
    padding: 20px;
    border: 1px solid black;
    opacity: 0.95;
    background: #aaaaaa;

    button {
        width: 30%;
        margin: 60px; 
        padding: 20px;
        border: none;
        border-radius: 50px;
        background: #234C50
    }
`

const ContactItem = styled.input`
    width: 80%;
    height: 50px;
    margin: 20px;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    background: #aaaaaa;
    color: black;
    font-size: 20px;
`




 
export default Contact;