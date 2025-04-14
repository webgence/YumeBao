import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} className= "logo_resize" alt="logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#products">Menu</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}
