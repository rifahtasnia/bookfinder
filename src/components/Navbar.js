import React from "react";

const Navbar=()=>
{
     return (
        <nav>
        <div className ="nav-wrapper">
          <a href="#" className ="brand-logo" style ={{ 
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
              }}>
              Book Finder</a>
          <ul id="nav-mobile" className ="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
     );
}

export default Navbar;