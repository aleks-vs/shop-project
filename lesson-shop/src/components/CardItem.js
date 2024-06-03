import { useState } from "react";
import { BsFillHeartFill, BsCartPlus } from "react-icons/bs";
import cart from "../data/globals";
import InCartQuantity from "./InCartQuantity";

const CardItem = ({ item }) => {
  let [isLiked, setIsLiked] = useState(false);
  let [addToCart, setAddToCart] = useState(false);
  const textInCart = 'В корзине: ';
  
  function addingItemToCart() {
    setAddToCart(true);
    cart.push({ id: item.id, cartItem: item, quantity: 1 });
    console.log(item.id);
  }
  return (
    <ul className="item-card">
      <li>
        <img src={item.img} alt="item" />
      </li>
      <li style={{ textAlign: "center" }}>
        <b>{item.name}</b>
      </li>
      <li>Описание: {item.description}</li>
      <li>Цена: {item.price + "$"}</li>
      <li style={{ textAlign: "end" }}>
        {!addToCart && <BsCartPlus onClick={() => addingItemToCart()} className="card-button" />}
        {addToCart && <InCartQuantity id={item.id} text={textInCart} />}
        <BsFillHeartFill
          onClick={() => setIsLiked((isLiked = !isLiked))}
          className={`card-button ${isLiked && "isLiked"}`}
        />
      </li>
    </ul>
  );
};

export default CardItem;
