import {useCart} from "./stores";

const InCartQuantity = ({id}) => {
  

const {inCartIncrement, inCartDecrement, delFromCart} = useCart()

  const cart = useCart(state => state.cart)
  const quantityInCart =  cart.find((item) => item.id === id).quantity
  function minusBtn(id) {
    quantityInCart > 1 ? inCartDecrement(id) : delFromCart(id)
  }
  
  return (
    <span className="inCartQuantity">
      <button onClick={() => minusBtn(id)}>---</button><b>{quantityInCart}</b>
      <button onClick={() => inCartIncrement(id)}>+++</button>
      <button onClick={() => delFromCart(id)}>X</button>
    </span>
  );
};

export default InCartQuantity;
