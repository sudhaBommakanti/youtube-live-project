import React from "react";
import { Link } from "react-router-dom";
// Media assets
import logoLight from "../../assets/images/logo/logo-light.svg";

function Header() {
  // Render
  return (
    <header className={"header"}>
      <Link to="/">
        <img src={logoLight} alt="Logo" />
      </Link>

      <div className="search-bar">
        <input placeholder="Search" />
        <Link to="/search-page">Search</Link>
      </div>
    </header>
  );
}

export default Header;
