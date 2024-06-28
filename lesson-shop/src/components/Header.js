import React, { useEffect, useState } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsBookmarks  } from "react-icons/bs";
import {useCart, useLike} from "./stores";
import Bookmarks from "./Bookmarks";
import Cart from "./Cart";
import Search from "./Search";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  let [bookmarksOpen, setBookmarksOpen] = useState(false);
  const cart = useCart(state => state.cart);
  const bookmarks = useLike(state=> state.likes)
  
  useEffect(() => {
    if (!cart.length) {
     return setCartOpen(false)
    }
  }, [cart, cartOpen])
  
  useEffect(() => {
    if (!bookmarks.length) {
     return setBookmarksOpen(false)
    }
  }, [bookmarks, bookmarksOpen])
  return (
    <header>
      <nav>
        <div className="logo">
          Shop
          <br />
          Logo
        </div>
        <Search/>
        <ul className="navigation">
          <li><a href="#top">Contacts</a></li>
          <li><a href="#top">About</a></li>
          <li>
            <BsBookmarks  
              onClick={() => {if (bookmarks.length) setBookmarksOpen(true)}}
              className={`header-icons ${bookmarksOpen && "active"}`}
            />
          </li>
          <li>
            <TfiShoppingCartFull
              onClick={() => {if (cart.length) setCartOpen(true)}}
              className={`header-icons ${cartOpen && "active"}`}
            />
          </li>
        </ul>
      </nav>
      {cartOpen && (<Cart />)}
      {bookmarksOpen && <Bookmarks />
      }
      
      <div className="devider"></div>
      <div className="banner-height">
        <div className="header-banner"></div>
      </div>
      {cartOpen && <div className="header-overlay" onClick={()=>setCartOpen(false)}>
      </div>}
      {bookmarksOpen && <div className="header-overlay" onClick={()=>setBookmarksOpen(false)}>
              </div>}
    </header>
  );
}
