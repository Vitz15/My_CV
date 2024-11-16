import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section className="section pt-0" id="about">
      {/* container */}
      <div className="container text-center">
        {/* about wrapper */}
        <div className="about">
          <div className="about-caption">
            <br />
            <p className="section-subtitle">{about.subtitle}</p>
            <h2 className="section-title mb-3">{about.title}</h2>
            <p className="justify">{about.description}</p>
          </div>
        </div>
        {/* end of about wrapper */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default About;
