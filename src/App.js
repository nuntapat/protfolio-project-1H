import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contract from "./components/Contract";
import Footer from "./components/Footer";
function App() {

  return (
    <>
    {/* <Particles 
    className="particles-canvas"
      params={{
        particles : {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape:{
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
      /> */}
    <Navbar />
    <Header />
    <AboutMe />
    <Service />
    <Experience />
    <Portfolio />
    <Contract />
    <Footer />
  </>
  );
}

export default App;
