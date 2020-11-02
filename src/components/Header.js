import React from "react";

import logo from "../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="p-5 h-auto lg:h-24 flex">
        <a href="https://www.missionmike.dev/" rel="nofollow noopener noreferrer" target="_blank" className="block relative w-auto">
          <img src={logo} alt="Logo" className="relative h-16 mr-10 lg:mr-5 w-auto" />
        </a>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl w-full font-serif" style={{color: `#cc00ff`}}>Video Placeholder Generator</h1>
      </div>
    );
  }
}

export default Header;
