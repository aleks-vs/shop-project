import items from "../data/items";
import CardItem from "./CardItem";

const Main = () => {
    return (
        <main>
            < div className='items-list'>
                {
                 items.map((item) => <CardItem key={item.id} item={item}/>)
                }
            </div>
        </main>
    )
};

export default Main;
