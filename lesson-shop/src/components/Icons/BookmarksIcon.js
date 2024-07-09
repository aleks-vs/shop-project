import { useLike } from "../stores";
import { BsBookmarkPlus , BsBookmarkCheck} from "react-icons/bs";


const BookmarksIcon = ({item, styleName}) => {
  const bookmarks = useLike(state => state.likes);
  const addToLikes = useLike(state => state.addToLikes);
  const delFromLikes = useLike(state => state.delFromLikes);
  const isLiked = bookmarks.find((el) => el.id === item.id)

    return(
    <>
        {isLiked ? <BsBookmarkCheck onClick={() => delFromLikes(item)} className={styleName} /> :
          <BsBookmarkPlus onClick={() => addToLikes(item)}
            className={styleName} />}
            
    </>)
}

 
export default BookmarksIcon;