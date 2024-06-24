import {  BsCartPlus, BsChatFill, BsStarFill   } from "react-icons/bs";
import InCartQuantity from "./InCartQuantity";
import { useCart } from "./stores";
import BookmarksIcon from "./BookmarksIcon";

const CardItem = ({ item }) => {
  
  const cart = useCart(state => state.cart)
  const addToCart = useCart(state => state.addToCart)
  const itemInCart = cart.find((el) => el.id === item.id)
 
  return (
    <ul className="item-card">
      <div>
        <li><BookmarksIcon item={item} styleName={"bookmark-card-icon"} />
          <div className="image-container">
          <img src={item.images[0]} alt="item" /> 
        </div>
      </li>
      <li>
        <span className="price-with-disc">{(item.price*(100-item.discountPercentage)/100).toFixed(2)} $</span>
          <span className="full-price">{item.price + "$" }</span>
          <span className="discount-percent">-{Math.round(item.discountPercentage)}%</span>
      </li>
      <li className="stock-quantity">Осталось {item.stock} шт</li>
      <li className="item-title">{item.title}</li>
        <li className="rating-and-reviews"><BsStarFill style={{ color: "darkorange" }} />{item.rating.toFixed(1)}  <BsChatFill /> {item.reviews.length}</li>
        </div>
      <li>
        {!itemInCart ? <button onClick={() => addToCart(item)} className="add-to-cart-button" ><BsCartPlus style={{fontSize:"large"}}/> В корзину  </button>:
          <InCartQuantity id={item.id} btnStyle={'card-quantity-btn'} fontSize={'20px'} />}
      </li>
    </ul>
  );
};

export default CardItem;
