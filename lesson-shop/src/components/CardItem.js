import { BsBookmarkPlus , BsBookmarkCheck  , BsCartPlus, BsChatFill, BsStarFill   } from "react-icons/bs";
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
      <div>
      <li>{isLiked ? <BsBookmarkCheck onClick={() => delFromLikes(item)} className={`card-bookmarks`}/>:<BsBookmarkPlus
        onClick={() => addToLikes(item)}
        className={`card-bookmarks`} 
      /> }
        <img src={item.img} alt="item" />
      </li>
      <li>
        <span className="price-with-disc">{item.price + "$"} </span>
        <span className="full-price">1000$ </span>
        <span className="discount-percent">-98%</span>
      </li>
      <li className="stock-quantity">Осталось N шт</li>
      <li className="item-title">{item.name}</li>
        <li className="rating-and-reviews"><BsStarFill style={{color:"darkorange"}}/> 4.7 <BsChatFill /> 11 отзывов</li>
        </div>
      <li>
        {!itemInCart ? <button onClick={() => addToCart(item)} className="add-to-cart-button" ><BsCartPlus style={{fontSize:"large"}}/> В корзину  </button>:
          <InCartQuantity id={item.id} btnStyle={'card-quantity-btn'} fontSize={'20px'} />}
      </li>
    </ul>
  );
};

export default CardItem;
