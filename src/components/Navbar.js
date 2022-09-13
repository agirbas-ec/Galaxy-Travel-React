import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click)

  return (
    <div className="header">
      <Link to="/">
        <h1>UZAY</h1>
      </Link>
      <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/pricing">Ücretler</Link>
        </li>
        <li>
          <Link to="/training">Yolculuk</Link>
        </li>
       
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes  size={20} style={{ color: "white" }}/> : <FaBars size={20} style={{ color: "white" }} />}
      </div>
    </div>
  );
};

export default Navbar;
