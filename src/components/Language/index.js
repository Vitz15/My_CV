import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Language = () => {
  const [language, setLanguage] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const languageRef = ref(db, "language");
    onValue(languageRef, (snapshot) => {
      const data = snapshot.val();
      setLanguage(data);
    });
  }, []);
  return (
    <section className="section" id="language">
      <div className="container text-center">
        <p className="section-subtitle">{language.subtitle1}</p>
        <h6 className="section-title mb-6">{language.title1}</h6>
        {/* row */}
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
              <div className="body">
                <img
                  src={`data:image/png;base64,${language.image1}`}
                  className="icon"
                />
                <h6 className="title">{language.title2}</h6>
                <p className="subtitle">{language.subtitle2}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
              <div className="body">
                <img
                  src={`data:image/png;base64,${language.image2}`}
                  className="icon"
                />
                <h6 className="title">{language.title3}</h6>
                <p className="subtitle">{language.subtitle3}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
              <div className="body">
                <img
                  src={`data:image/png;base64,${language.image3}`}
                  className="icon"
                />
                <h6 className="title">{language.title4}</h6>
                <p className="subtitle">{language.subtitle4}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="language-card">
              <div className="body">
                <img
                  src={`data:image/png;base64,${language.image4}`}
                  className="icon"
                />
                <h6 className="title">{language.title5}</h6>
                <p className="subtitle">{language.subtitle5}</p>
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
