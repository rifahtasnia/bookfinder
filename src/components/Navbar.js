import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper" style={{backgroundColor: "black"}}>
        <Link to="/" className="brand-logo" style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          Book Finder</Link>
      </div>
    </nav>
  );
}

export default Navbar;