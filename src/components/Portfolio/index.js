import React from "react";
import img1 from "../../assets/imgs/AdminPuskesmas.png";
import img2 from "../../assets/imgs/Sistem Apotek.png";
import img3 from "../../assets/imgs/LibraryAdmin.png";

const Portfolio = () => {
  return (
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
    </section>
  );
};

export default Portfolio;
