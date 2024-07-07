import BookmarksIcon from "../Icons/BookmarksIcon";
import InCartQuantity from "./InCartQuantity";
import {useCart} from "../stores";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
    const cart = useCart(state => state.cart)
    const deleteBtn = useCart(state => state.delFromCart)
    const cartSum = cart.reduce((sum, elem) => {
        return sum + elem.quantity*elem.cartItem.price
    }, 0)
    function cartSubmit() {
        alert("Submitted")
    }
    return (
        <div className="cart-window">
            {cart.map((item) => (
                item.cartItem && <ul key={item.id} className="cart-window-card">
                    <li ><img src={item.cartItem.images[0]} alt="item" /></li>
                    <li>{item.cartItem.title}</li>
                    <li className="cart-window-quantity">{<InCartQuantity id={item.id} btnStyle={'cart-window-quantity-btn'} fontSize={'20px'} />}
                        <p className="cart-window-quantity-price">{item.cartItem.price.toFixed(2)}$ / count </p></li>
                    <li className="cart-window-item-sum"><b>{(item.cartItem.price * item.quantity).toFixed(2)}$</b></li>
                    <li><AiOutlineDelete className="bookmark-window-icon" onClick={()=>deleteBtn(item.id)}/></li>
                    <li><BookmarksIcon item={item.cartItem} styleName={'bookmark-window-icon'}/></li>
                </ul>
            ))}
            <div className="cart-sum">Total cost: {cartSum.toFixed(2)}$</div>
            <button className="cart-submit" onClick={cartSubmit}>Submit</button>
        </div>
    ); 
}
 
export default Cart;
