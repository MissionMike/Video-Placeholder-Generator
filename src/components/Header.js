import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="flex content-around flex-wrap bg-gray-200 pt-2">
        <h1 className="font-bold text-4xl w-full text-center">
          Video Placeholder Generator
        </h1>
      </div>
    );
  }
}

export default Header;
