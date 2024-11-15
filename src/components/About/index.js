import React from "react";

const About = () => {
  return (
    <section className="section pt-0" id="about">
      {/* container */}
      <div className="container text-center">
        {/* about wrapper */}
        <div className="about">
          <div className="about-caption">
            <br />
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p className="justify">
              My name is Jonathan Vito Taufik. I am currently studying at
              Universitas Klabat (UNKLAB), Faculty of Computer Science, and I
              live in Arimadidi. My interests and expertise focus on backend
              development, where I have experience in building and managing
              efficient systems that support the needs of modern applications. I
              am always eager to learn the latest technologies and enjoy
              collaborating in teams to create valuable technological solutions.
            </p>
          </div>
        </div>
        {/* end of about wrapper */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default About;
