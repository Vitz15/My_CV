import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import img1 from "../../assets/imgs/AdminPuskesmas.png";
import img2 from "../../assets/imgs/Sistem Apotek.png";
import img3 from "../../assets/imgs/LibraryAdmin.png";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const portfolioRef = ref(db, "portfolio");
    onValue(portfolioRef, (snapshot) => {
      const data = snapshot.val();
      setPortfolio(data);
    });
  }, []);
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">{portfolio.subtitle1}</p>
        <h6 className="section-title mb-6">{portfolio.title}</h6>
        {/* row */}
        <div className="row">
          <div className="col-md-4">
            <a href="#" className="portfolio-card">
              <img
                src={`data:image/png;base64,${portfolio.image1}`}
                className="portfolio-card-img"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>{portfolio.subtitle3}</h4>
                  <p className="font-weight-normal">{portfolio.description2}</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" className="portfolio-card">
              <img
                className="portfolio-card-img"
                src={`data:image/png;base64,${portfolio.image2}`}
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>{portfolio.subtitle2}</h4>
                  <p className="font-weight-normal">{portfolio.description1}</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" className="portfolio-card">
              <img
                className="portfolio-card-img"
                src={`data:image/png;base64,${portfolio.image3}`}
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>{portfolio.subtitle4}</h4>
                  <p className="font-weight-normal">{portfolio.description3}</p>
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
