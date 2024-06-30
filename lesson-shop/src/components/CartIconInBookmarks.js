import { BsCartPlus, BsCartCheck } from "react-icons/bs";
import { useCart } from "./stores";

const CartIconInBookmarks = ({item}) => {
    const addToCart = useCart(state => state.addToCart)
    const delFromCart = useCart(state => state.delFromCart)
    const cart = useCart(state=>state.cart)
    const isInCart = cart.find((el) => el.id === item.id)
    return ( 
    <>
        {isInCart ? <BsCartCheck className="bookmark-window-icon" onClick={()=> delFromCart(item.id)} /> :
        <BsCartPlus className="bookmark-window-icon" onClick={()=> addToCart(item)}/>}
    </>
     );
}
 
export default CartIconInBookmarks;