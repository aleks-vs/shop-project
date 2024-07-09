import { useCart } from "../stores";
import { AiOutlineMinus , AiOutlinePlus   } from "react-icons/ai";

const InCartQuantity = ({id, btnStyle, fontSize}) => {
  

const {inCartIncrement, inCartDecrement, delFromCart} = useCart()

  const cart = useCart(state => state.cart)
  const quantityInCart =  cart.find((item) => item.id === id).quantity
  function minusBtn(id) {
    quantityInCart > 1 ? inCartDecrement(id) : delFromCart(id)
  }
  
  return (
    <div className="card-quantity" style={{ fontSize: `${fontSize}` }}>
      <button className={`${btnStyle}`} onClick={() => minusBtn(id)}><AiOutlineMinus /></button><b>{quantityInCart}</b>
      <button className={`${btnStyle}`} onClick={() => inCartIncrement(id)}><AiOutlinePlus  /></button>
    </div>
  );
};

export default InCartQuantity;
