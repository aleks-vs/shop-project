import items from "../data/items";
import CardItem from "./CardItem";

const Main = () => {
       return (
    < div className='items-list'>
    {
        items.map((item) => <CardItem key={item.id} props={item} />
        )
    }
    </div>
    )
};

export default Main;
