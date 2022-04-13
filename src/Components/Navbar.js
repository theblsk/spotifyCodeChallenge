import React from "react";
import "../ComponentCss/Navbar.css";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container-fluid" id="forceCenter">
          <span className="navbar-brand mb-0 h1">Spotify Artist Search</span>
        </div>
      </nav>
    </React.Fragment>
  );
}
