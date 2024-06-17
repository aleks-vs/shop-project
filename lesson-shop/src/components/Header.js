import React, { useEffect, useState } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsBookmarks  } from "react-icons/bs";
import {useCart, useLike} from "./stores";
import Bookmarks from "./Bookmarks";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  let [likesOpen, setLikesOpen] = useState(false);
  const cart = useCart(state => state.cart);
  const bookmarks = useLike(state=> state.likes)
  function cartOpenBtn() {
    setLikesOpen(false)
    setCartOpen(cartOpen = !cartOpen)
  }
  useEffect(() => {
    if (!cart.length) {
     return setCartOpen(false)
    }
  }, [cart, cartOpen])
  function likesOpenBtn() {
    setCartOpen(false)
    setLikesOpen(likesOpen = !likesOpen)
  }
  useEffect(() => {
    if (!bookmarks.length) {
     return setLikesOpen(false)
    }
  }, [bookmarks, likesOpen])
  return (
    <header>
      <nav>
        <div className="logo">
          Shop
          <br />
          Logo
        </div>
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
      {likesOpen && <Bookmarks />
      }
      
      {console.log("length",bookmarks[0])}
      <div className="devider"></div>
      <div className="banner-height">
        <div className="header-banner"></div>
      </div>
    </header>
  );
}
