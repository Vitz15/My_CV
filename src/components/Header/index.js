import React from 'react'

const Header = () => {
  return (
    <header id="home" className="header">
        <div className="overlay" />
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Jonathan Taufik</span>
          </h1>
          <p className="header-subtitle">Faculty Of Computer Science</p>
          <a href="#portfolio">
            <button className="btn btn-primary">Visit My Works</button>
          </a>
        </div>
      </header>
  )
}

export default Header