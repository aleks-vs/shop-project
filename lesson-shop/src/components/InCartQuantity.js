import { useCart } from "./stores";
import { AiOutlineMinus , AiOutlinePlus   } from "react-icons/ai";

const InCartQuantity = ({id, btnStyle}) => {
  

const {inCartIncrement, inCartDecrement, delFromCart} = useCart()

  const cart = useCart(state => state.cart)
  const quantityInCart =  cart.find((item) => item.id === id).quantity
  function minusBtn(id) {
    quantityInCart > 1 ? inCartDecrement(id) : delFromCart(id)
  }
  
  return (
    <span className="card-quantity" style={{ fontSize: "20px" }}>
      <button className={`${btnStyle}`} onClick={() => minusBtn(id)}><AiOutlineMinus /></button><b>{quantityInCart}</b>
      <button className={`${btnStyle}`} onClick={() => inCartIncrement(id)}><AiOutlinePlus  /></button>
      {/* <button onClick={() => delFromCart(id)}>X</button> */}
    </span>
  );
};

export default InCartQuantity;
