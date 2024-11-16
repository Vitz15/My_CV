import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Language from "./components/Language";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* End of Page Navbar */}
      {/* page header */}
      <Header />
      {/* end of page header */}
      {/* about section */}
      <About />
      {/* end of about section */}
      {/* language section */}
      <Language />
      {/* end of language section */}
      {/* portfolio section */}
      <Portfolio />
      {/* end of blog section */}
      {/* my-skill section */}
      <Skill />
      {/* end of blog section */}
      {/* contact section */}
      <Contact />
      {/* footer */}
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
