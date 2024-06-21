import BookmarksIcon from "./BookmarksIcon";
import {useLike} from "./stores";

const Bookmarks = () => {
    const bookmarks = useLike(state => state.likes)
    return (
        <div className="bookmarks-window">
            {bookmarks.map((item) => (
                item.likedItem && <ul key={item.id} className="bookmarks-card">
                    <li ><img src={item.likedItem.img} alt="item" /></li>
                    <li>{item.likedItem.name}</li>
                    <li><BookmarksIcon item={item} styleName={"bookmark-window-icon"} /></li>
                </ul>
            ))}
        </div>
    );
}
 
export default Bookmarks;