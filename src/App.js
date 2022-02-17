import "./App.css";
import Nav from "./pages/Nav";
import AppHeader from "./pages/AppHeader";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useState, useEffect } from "react";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Nav />
      <AppHeader offsetY={offsetY} />
      <About />
      <MyWork id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
