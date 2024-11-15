import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Language from "./components/Language";
import Portfolio from "./components/Portfolio";
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
      {/* contact section */}
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          {/* contact form */}
          <form action className="contact-form col-md-10 col-lg-8 m-auto">
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  size={50}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  requried
                />
              </div>
              <div className="form-group col-sm-12">
                <textarea
                  name="comment"
                  id="comment"
                  rows={6}
                  className="form-control"
                  placeholder="Write Something"
                  defaultValue={""}
                />
              </div>
              <div className="form-group col-sm-12 mt-3">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-outline-primary rounded"
                />
              </div>
            </div>
          </form>
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
