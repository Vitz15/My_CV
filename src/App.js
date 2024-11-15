import img1 from "./assets/imgs/AdminPuskesmas.png";
import img2 from "./assets/imgs/Sistem Apotek.png";
import img3 from "./assets/imgs/LibraryAdmin.png";
import img4 from "./assets/imgs/C++.png";
import img5 from "./assets/imgs/Csharp_Logo.png";
import img6 from "./assets/imgs/Python.jpg";
import img7 from "./assets/imgs/javascript.png";
import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import About from "./components/About";
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
      {/* service section */}
      <section className="section" id="service">
        <div className="container text-center">
          <p className="section-subtitle">My Favorite</p>
          <h6 className="section-title mb-6">Programming Languages</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img
                    src={img4}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon"
                  />
                  <h6 className="title">C++</h6>
                  <p className="subtitle">
                    Object-oriented programming languages that are widely used
                    in software development, particularly in applications that
                    require high performance and efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img
                    src={img5}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon"
                  />
                  <h6 className="title">C#</h6>
                  <p className="subtitle">
                    A modern programming language commonly used for software
                    development, specifically designed to develop Windows-based
                    applications efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img
                    src={img6}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon"
                  />
                  <h6 className="title">Python</h6>
                  <p className="subtitle">
                    One of the programming languages that is easy to use and
                    very simple for both experienced and new programmers to
                    understand and learn.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img
                    src={img7}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon"
                  />
                  <h6 className="title">Java Script</h6>
                  <p className="subtitle">
                    One of the programming languages used for creating
                    interactive and dynamic websites. It can be used on both the
                    client-side and server-side.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end of row */}
        </div>
      </section>
      {/* end of service section */}
      {/* portfolio section */}
      <section className="section" id="portfolio">
        <div className="container text-center">
          <p className="section-subtitle">What I Did ?</p>
          <h6 className="section-title mb-6">Portfolio</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img
                  src={img2}
                  className="portfolio-card-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Pharmacy System</h4>
                    <p className="font-weight-normal">
                      Pharmacy system with a comprehensive set of features.
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img
                  className="portfolio-card-img"
                  src={img1}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Desktop UI for Puskesmas</h4>
                    <p className="font-weight-normal">
                      Comprehensive UI for Puskesmas with a complete set of
                      features.
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img
                  className="portfolio-card-img"
                  src={img3}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Desktop UI for Library</h4>
                    <p className="font-weight-normal">
                      Comprehensive UI for Library with a complete set of
                      features.
                    </p>
                  </span>
                </span>
              </a>
            </div>
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </section>{" "}
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
