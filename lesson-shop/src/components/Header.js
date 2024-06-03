import React, { useState } from "react";
import { TfiShoppingCartFull, TfiHeart } from "react-icons/tfi";
import cart from "../data/globals";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  let [likesOpen, setLikesOpen] = useState(false);

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
          <li>
            <TfiHeart
              onClick={() => setLikesOpen((likesOpen = !likesOpen))}
              className={`header-icons ${likesOpen && "active"}`}
            />
          </li>
          <li>
            <TfiShoppingCartFull
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`header-icons ${cartOpen && "active"}`}
            />
          </li>
        </ul>
      </nav>
      {cartOpen && (
        <div className="cart-window">
          {cart.map((elem) => (
            <p key={elem.id}>{`Name: ${elem.cartItem.name}, q: ${elem.quantity}`}</p>
            // <p key={elem.id}>{`Name: ${elem.cartItem.name}, q: ${elem.quantity}`}</p>
          ))}
        </div>
      )}
      {likesOpen && <div className="likes-window"></div>}
      <div className="devider"></div>
      <div className="banner-height">
        <div className="header-banner"></div>
      </div>
    </header>
  );
}
