import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <header id="home" className="header">
      <div className="overlay" />
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">{header.title1}</span>
          <span className="down">{header.title2}</span>
        </h1>
        <p className="header-subtitle">{header.subtitle1}</p>
        <a href="#portfolio">
          <button className="btn btn-primary">{header.button}</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
