import React from "react";
import Logo from "../logo.svg"

const Header = () => {
  return ( 
    <header className="nav">
      <div className="nav--logo">
        <img src={Logo} alt="Logo" className="logo--img"/>
        <p className="logo--txt">Meme Generator</p>
      </div>
      <div className="nav--title">React App ⚛️</div>
    </header>
  );
}


export default Header;