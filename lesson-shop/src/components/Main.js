import { useEffect } from "react";
import CardItem from "./CardItem";
import { useFetch } from "./stores";

const Main = () => {
    const { products, getAllProducts, getAllProducts1 } = useFetch();
    const ItemsLayout = ()=> (
        < div className='items-list'>
            {
                products.map((item) => <CardItem key={item.id} item={item} />)
            }
        </div>
    );
    useEffect(() => { getAllProducts() }, [getAllProducts]); // можно ли отключить требование добавлять зависимость вместо []?
    useEffect(() => { <ItemsLayout /> }, [products]);

    return (    
        <main>
            <button onClick={() => getAllProducts1()}>by id </button>
            <button onClick={()=>console.log(products)}>log products</button>
            <ItemsLayout />
        </main>
    )
};

export default Main;
