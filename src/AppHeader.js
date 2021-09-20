
import styled from "styled-components"
import tlo from './tlo.png'
import reka from './reka.png'

const AppHeader = ({offsetY}) => {

    return ( 
        <>
        <AppHeaderStyles  offsetY={offsetY} id='home'>
          <AppImg  offsetY={offsetY} src={reka} alt="reka"  />
            <AppWrapper  offsetY={offsetY} id='home'>
                <h2>Graphic Design</h2>
                <h2>& Illustrations</h2>
                <p>NATALIA BRZOZOWSKA</p>
            </AppWrapper>
        </AppHeaderStyles>
        </>
     );
}
 
export default AppHeader;

const AppHeaderStyles = styled.header.attrs(({offsetY}) => ({
  style: {
    transform: `translateY(${ offsetY * 0.5}px)`
  }
}))`
  display: flex;
  position: relative;
  flex-flow: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-image: url(${tlo}), url(${reka});
  background-size: cover;
  background-position-x: center;

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

const AppImg = styled.img.attrs(({offsetY}) => ({
  style: {
    transform: `translateY(${ offsetY * -0.65}px)`
  }
}))
`
  display: block;
  
`



const AppWrapper = styled.div.attrs(({offsetY}) => ({
  style: {
    transform: `translateY(${ offsetY * -0.5}px)`
  }
}))`
display: flex;
position: absolute;
top: 0px;
flex-flow: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .4);
text-shadow: 1px 1px 2px black;

h2 {
    margin: 0px 20px;
    color: #dddddd;
    font-size: 36px;
    text-transform: uppercase;
    @media (min-width: 992px) {
        font-size: 64px;
    }
  }

p {
  margin: 22px 20px;
  color: #dddddd;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  
  @media (min-width: 992px) {
        font-size: 26px;
    }
} 
`