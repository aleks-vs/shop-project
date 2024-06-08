import React, { useState } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsBookmarks  } from "react-icons/bs";
import {useCart, useLike} from "./stores";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  let [likesOpen, setLikesOpen] = useState(false);
  const cart = useCart(state => state.cart)
  const likes = useLike(state => state.likes);

  function cartOpenBtn() {
    setLikesOpen(false)
    setCartOpen(cartOpen = !cartOpen)
  }
  function likesOpenBtn() {
    setCartOpen(false);
    setLikesOpen(likesOpen = !likesOpen)
  }
  
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
            <BsBookmarks  
              onClick={() => likesOpenBtn()}
              className={`header-icons ${likesOpen && "active"}`}
            />
          </li>
          <li>
            <TfiShoppingCartFull
              onClick={() => cartOpenBtn()}
              className={`header-icons ${cartOpen && "active"}`}
            />
          </li>
        </ul>
      </nav>
      {cartOpen && (
        <div className="cart-window">
          {cart.map((elem) => (
            elem.cartItem && <p key={elem.id}>{`Name: ${elem.cartItem.name}, q: ${elem.quantity}`}</p>
          ))}
        </div>
      )}
      {likesOpen && <div className="likes-window">
        {likes.map((elem) => ( //при удалении из массива не может найти name, ошибка
         elem.likedItem && <p key={elem.id}>{`Name: ${elem.likedItem.name}`}</p>
        ))}
        </div>}
      <div className="devider"></div>
      <div className="banner-height">
        <div className="header-banner"></div>
      </div>
    </header>
  );
}
