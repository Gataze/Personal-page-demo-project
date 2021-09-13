
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader>
        
       
      </AppHeader>
    </div>
  );
}

export default App;




const AppHeader = styled.header`
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, rgba(0,117,116,1) 0%, rgba(0,117,112,1) 13%, rgba(0,117,112,1) 44%, rgba(28,106,127,1) 58%, rgba(139,119,181,1) 60%, rgba(123,6,131,1) 62%, rgba(33,0,33,1) 66%, rgba(0,0,0,1) 100%);
  
  &:before, &:after {
    
    position: absolute;
    width: 600px;
    height: 400px;
    opacity: 0.1;
    color: black;
    font-size: 176px;
    font-weight: 800;
    text-align: left;
  }

  &:before {
    content: 'GRAPHIC DESIGN';
    top: -80px;
    right: 0px;
  }

  &:after {
    content: 'PORT- FOLIO';
    bottom: 60px;
    left: 10px;
  }

`