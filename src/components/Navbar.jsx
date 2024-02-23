import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="search-container">
          <input type="text" placeholder="" className="search-input" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="nav-items">
          <a className="nav-item">Categories</a>
          <a className="nav-item">Website Builder</a>
          <a className="nav-item">Today's deals</a>
        </div>
      </nav>
    </div>
  );
}
