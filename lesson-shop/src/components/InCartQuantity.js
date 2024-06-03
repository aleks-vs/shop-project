import { useState } from "react";
import cart from "../data/globals";

const InCartQuantity = ({id}, text) => {
  const inCartItem = cart.find((item) => item.id === id);
  let [value, setValue] = useState(inCartItem.quantity);
  let [inCart, setInCart] = useState(cart);
  function plus() {
    inCartItem.quantity++;
    setValue(inCartItem.quantity);
  }
  function minus() {
    inCartItem.quantity--;
      setValue(inCartItem.quantity);
  }
  const forDel = cart.find((el) => el.id === id);
  const filtered = cart.filter((el)=> el.id !== id)
  
  return (
    <span>
      <button onClick={() => minus()}>---</button>В корзине: {value} шт.
      <button onClick={() => plus()}>+++</button>
      <button onClick={() => cart.splice(forDel,1)}>Delete</button>
  {console.log(inCart)}
  {console.log("filtered: ",setInCart(filtered))}
    </span>
  );
};

export default InCartQuantity;
