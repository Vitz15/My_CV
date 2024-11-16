import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Language from "./components/Language";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
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
        <footer className="footer">
          <div className="social-links text-center m-auto ml-sm-auto">
            <a href="https://wa.me/qr/JUPHIXIOJFUVO1" className="link">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="https://t.me/Zedxxs" className="link">
              <i className="fab fa-telegram" />
            </a>
            <a
              href="https://www.instagram.com/vitzz15/profilecard/?igsh=OTJuMnJlejE2b3Uy"
              className="link"
            >
              <i className="fab fa-instagram" />
            </a>
            <a href="https://github.com/Vitz15" className="link">
              <i className="fab fa-github" />
            </a>
          </div>
        </footer>
      </div>{" "}
      {/* end of page footer */}
    </div>
  );
};

export default App;
