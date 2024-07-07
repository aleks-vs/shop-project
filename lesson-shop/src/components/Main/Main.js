import { useEffect } from "react";
import CardItem from "../ItemCards/CardItem";
import { useFetch } from "../stores";

const Main = () => {
    const { products, getAllProducts } = useFetch();
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
            <ItemsLayout />
        </main>
    )
};

export default Main;
