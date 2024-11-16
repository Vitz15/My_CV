import React from "react";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-3">Contact Me</h6>
        <p className="small-container">
          Thank you for visiting my portfolio! if you're interested in working
          together, have questions, or just want to say hello, please feel free
          to reach out. I'm open to new project, collaborations, or discussions
          about my work.
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
      </div>
    </section>
  );
};

export default Contact;
