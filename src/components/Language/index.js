import React from "react";
import img4 from "../../assets/imgs/C++.png";
import img5 from "../../assets/imgs/Csharp_Logo.png";
import img6 from "../../assets/imgs/Python.jpg";
import img7 from "../../assets/imgs/javascript.png";
const Language = () => {
  return (
    <section className="section" id="language">
      <div className="container text-center">
        <p className="section-subtitle">My Favorite</p>
        <h6 className="section-title mb-6">Programming Languages</h6>
        {/* row */}
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
              <div className="body">
                <img
                  src={img4}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">C++</h6>
                <p className="subtitle">
                  Object-oriented programming languages that are widely used in
                  software development, particularly in applications that
                  require high performance and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
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
            <div className="language-card">
              <div className="body">
                <img
                  src={img6}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Python</h6>
                <p className="subtitle">
                  One of the programming languages that is easy to use and very
                  simple for both experienced and new programmers to understand
                  and learn.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
              <div className="body">
                <img
                  src={img7}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Java Script</h6>
                <p className="subtitle">
                  One of the programming languages used for creating interactive
                  and dynamic websites. It can be used on both the client-side
                  and server-side.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end of row */}
      </div>
    </section>
  );
};

export default Language;
