import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
  const [navbar, setNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navbarRef = ref(db, "navbar");
    onValue(navbarRef, (snapshot) => {
      const data = snapshot.val();
      setNavbar(data);
    });
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home" className="nav-link">
            {navbar.nav1}
          </a>
          <a href="#about" className="nav-link">
            {navbar.nav2}
          </a>
          <a href="#portfolio" className="nav-link">
            {navbar.nav3}
          </a>
          <a href="#my-skill" className="nav-link">
            {navbar.nav4}
          </a>
          <a href="#contact" className="nav-link">
            {navbar.nav5}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
