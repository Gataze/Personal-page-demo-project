import './App.css';
import Nav from './Nav';
import AppHeader from './AppHeader';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';
import Footer from './Footer';
import { useState, useEffect } from "react";

function App() {

  const [offsetY, setOffsetY] = useState(0);
  
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll);

    }, [])

  return (
   
       <div className="App">
        <Nav />
            <AppHeader offsetY={offsetY}/>
            <About />
            <MyWork id='projects'/>
            <Contact id='contact'/>
            <Footer />
      </div>

  );
}





export default App;


