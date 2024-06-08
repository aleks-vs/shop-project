import items from "../data/items";
import CardItem from "./CardItem";

const Main = () => {
       return (
    < div className='items-list'>
    {
                   items.map((item) => <CardItem key={item.id} item={item}  />
        )
    }
    </div>
    )
};

export default Main;
