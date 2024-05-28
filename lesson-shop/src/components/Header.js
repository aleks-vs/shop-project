import React from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";

export default function Header() {
  return (
    <header>
      <nav>
        <span className="logo">
          Shop
          <br />
          Logo
        </span>
        <ul className="navigation">
          <li>Contacts</li>
          <li>About</li>
          <li>Liked</li>
          <li><TfiShoppingCartFull/></li>
        </ul>
      </nav>
      <div className="devider"></div>
      <div className="banner-height">
        <div className="header-banner"></div>
      </div>
    </header>
  );
}
