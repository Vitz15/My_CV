import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Language from "./components/Language";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skills";
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
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-3">Contact Me</h6>
          <p className="small-container">
            Thank you for visiting my portfolio! if you're interested in working
            together, have questions, or just want to say hello, please feel
            free to reach out. I'm open to new project, collaborations, or
            discussions about my work.
            <br />
            <br />
            <p>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginRight: "15px" }}
              />
              Airmadidi, Minahasa Utara, Sulawesi utara <br />
              <i className="fas fa-phone" style={{ marginRight: "15px" }} />
              08998332906 <br />
              <i className="fas fa-envelope" style={{ marginRight: "15px" }} />
              vitojonathan1515@gmail.com <br />
            </p>
          </p>

          {/* end of contact form */}
        </div>
        {/* end of container */}
      </section>
      {/* end of contact section */}
      {/* footer */}
      <div className="container">
        <footer className="footer">
          <div className="social-links text-right m-auto ml-sm-auto">
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
