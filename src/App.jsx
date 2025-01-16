import Navbar from "./components/Navbar";
import Header from "./components/header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/Particles";
const App = () => {
  return (
    <>
     <ParticlesComponent />
     <Navbar />
     <Header />
     <About />
     <Services />
     <Skills />
     <Project />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  );
};

export default App;
