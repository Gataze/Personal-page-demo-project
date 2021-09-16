
import styled from "styled-components"
import img from './delphinium.jpg'


const AppHeader = ({offsetY}) => {

    
    
    return ( 
        <>
        <AppHeaderStyles style={{ transform: `translateY(${ offsetY * 0.5}px)`}}>
            <AppWrapper>
                <h2>Graphic Design</h2>
                <h2>& Illustrations</h2>
                <p>NATALIA BRZOZOWSKA</p>
            </AppWrapper>
        </AppHeaderStyles>
        </>
     );
}
 
export default AppHeader;

const AppHeaderStyles = styled.header`
display: flex;
position: relative;
flex-flow: column;
align-items: center;
height: 100vh;
overflow: hidden;

/* background: linear-gradient(135deg, rgba(0, 117, 116, 1) 0%, rgba(0, 117, 112, 1) 13%, rgba(0, 117, 112, 1) 44%, rgba(28, 106, 127, 1) 58%, rgba(139, 119, 181, 1) 60%, rgba(123, 6, 131, 1) 62%, rgba(33, 0, 33, 1) 66%, rgba(0, 0, 0, 1) 100%); */
background-image: url(${img});
background-size: contain;
background-position-x: center;
filter: grayscale(0);

&:before, &:after {
  position: absolute;
  width: 600px;
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

&:before {
  content: 'GRAPHIC DESIGN';
  top: -5%;
  right: 5%;
  @media (min-width: 768px) {
    right: 20%;
  }
  @media (min-width: 1200px) {
    top: -10%;
    right: -5%;
  }
}

&:after {
  content: 'PORT- FOLIO';
  bottom: -140px;
  left: 10px;
  @media (min-width: 768px) {
    bottom: -7%;
  }
  @media (min-width: 1200px) {
    bottom: 3%;
  }
}
`


const AppWrapper = styled.div`
display: flex;
flex-flow: column;
align-items: flex-start;
margin-top: 16%;

h2 {
    margin: 0px;
    color: #bbbbbb;
    font-size: 36px;
    text-transform: uppercase;
    @media (min-width: 992px) {
        font-size: 64px;
    }
    
  }

p {
  margin: 22px 0;
  color: #bbbbbb;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  @media (min-width: 992px) {
        font-size: 26px;
    }
} 
`