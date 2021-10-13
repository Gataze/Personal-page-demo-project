import styled from "styled-components";
import mapa from "./img/pomorzany.jpg"


const Contact = () => {
    return ( 
        <ContactWrapper id='contact'>
           <ContactContainer>
                <ContactForm>
                    <h1>Formularz kontaktowy</h1>
                    <ContactItem placeholder='Imię'></ContactItem>
                    <ContactItem placeholder='Nazwisko'></ContactItem>
                    <ContactItem placeholder='E-mail'></ContactItem>
                    <ContactItem placeholder='Wiadomość'></ContactItem>
                    <button>Wyślij</button>
                </ContactForm>
            </ContactContainer>
        </ContactWrapper>
     );
}

const ContactWrapper = styled.section`
    display: flex;
    position: relative;
    justify-content: center;
    height: 610px;
    background-image: url(${mapa});
    background-size: cover;
    color: #888888;
    text-align: left;
    @media (min-width: 992px) {
        height: 81vh;
    }
    

    &:before, &:after {
      position: absolute;
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
      width: 1093px;
      font-size: 176px;
  }
}

&:after {
  content: 'CONTACT.';
  z-index: 0;
  top: 00px;
  right: 10px;
  font-size: 76px;
 
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
    width: 100%;
    height: 610px;
    opacity: .85;
    background-color: #cccccc;
    @media (min-width: 992px) {
        width: 600px;
        height: 700px;
        margin: 120px 80px -60px auto ;
        padding: 0 15px;
        border-radius: 20px;
        opacity: .95;
    }
    
    h1 {
        width: 80%;
        margin-left: 0px;
        color: #555555;
        font-weight: 400;     
        text-transform: uppercase;
        @media (min-width: 992px) {
            margin-left: 60px;
            font-size: 36px;
        }
    }
        

    button {
        width: 30%;
        margin: 40px; 
        padding: 15px;
        border: none;
        border-radius: 50px;
        background: #234C50;
        color: #cccccc;
        font-size: 18px;

        &:hover {
            opacity: 0.8;
        }
    }
    

`

const ContactContainer = styled.div`
    width: 100%;
    max-width: 1440px;
`

const ContactItem = styled.input`
    width: 80%;
    height: 50px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background: #cccccc;
    color: black;
    font-size: 15px;
    @media (min-width: 992px) {
        margin: 20px;
        font-size: 20px;
    }
`




 
export default Contact;