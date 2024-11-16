import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">{contact.subtitle}</p>
        <h6 className="section-title mb-3">{contact.title}</h6>
        <p className="small-container">
          {contact.description}
          <br />
          <br />
          <p>
            <i
              className="fas fa-map-marker-alt"
              style={{ marginRight: "15px" }}
            />
            {contact.place} <br />
            <i className="fas fa-phone" style={{ marginRight: "15px" }} />
            {contact.number} <br />
            <i className="fas fa-envelope" style={{ marginRight: "15px" }} />
            {contact.email} <br />
          </p>
        </p>
      </div>
    </section>
  );
};

export default Contact;
