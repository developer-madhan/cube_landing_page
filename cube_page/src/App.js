import About from "./components/About";
import MyNavbar from "./components/MyNavbar";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Slider from "./components/Slider";

// import './App.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <Slider/>
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
    
  );
}

export default App;
