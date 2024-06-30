import BookmarksIcon from "./BookmarksIcon";
import CartIconInBookmarks from "./CartIconInBookmarks";
import {useLike} from "./stores";

const Bookmarks = () => {
    const bookmarks = useLike(state => state.likes)

    return (
        <div className="bookmarks-window">
            {bookmarks.map((item) => (
                item.likedItem && <ul key={item.id} className="bookmarks-card">
                    <li><img src={item.likedItem.images[0]} alt="item" /></li>
                    <li>{item.likedItem.title}</li>
                    <li><BookmarksIcon item={item} styleName={"bookmark-window-icon"} /></li>
                    <li><CartIconInBookmarks item={item.likedItem}/></li>
                </ul>
            ))}
        </div>
    );
}
 
export default Bookmarks;