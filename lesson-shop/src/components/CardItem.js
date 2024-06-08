import { BsBookmarkPlus , BsBookmarkCheck  , BsCartPlus } from "react-icons/bs";
import InCartQuantity from "./InCartQuantity";
import { useCart } from "./stores";
import {useLike} from "./stores";

const CardItem = ({ item }) => {
  
  const cart = useCart(state => state.cart)
  const addToCart = useCart(state => state.addToCart)
  const itemInCart = cart.find((el) => el.id === item.id)
  
  const likes = useLike(state => state.likes);
  const addToLikes = useLike(state => state.addToLikes);
  const delFromLikes = useLike(state => state.delFromLikes);
  const isLiked = likes.find((el) => el.id === item.id)
  return (
    <ul className="item-card">
      <li>{isLiked ? <BsBookmarkCheck onClick={() => delFromLikes(item)} className={`like-heart`}/>:<BsBookmarkPlus
        onClick={() => addToLikes(item)}
        className={`like-heart`} 
      /> }
        <img src={item.img} alt="item" />
      </li>
      
      <li style={{ textAlign: "center" }}>
        <b>{item.name}</b>
      </li>
      <li>Описание: {item.description}</li>
      <li>Цена: {item.price + "$"}</li>
      <li style={{ textAlign: "end" }}>
        {!itemInCart ? <button onClick={() => addToCart(item)} className="add-to-cart-button" ><BsCartPlus style={{fontSize:"large"}}/> В корзину  </button>:
        <InCartQuantity id={item.id} />}
      </li>
    </ul>
  );
};

export default CardItem;
