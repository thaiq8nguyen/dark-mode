import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        {/* <h1 className="navbar-item">Crypto Tracker</h1> */}
        <Link to="/" className="navbar-item title ">Crypto Tracker</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/bitcoin" className="navbar-item">Bitcoin</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            
            <div className="field">
              <input type="checkbox" name="darkModeToggle" className="switch" checked={darkMode} onChange={toggleMode}/>
              <label htmlFor="darkModeToggle">Dark Mode</label>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
