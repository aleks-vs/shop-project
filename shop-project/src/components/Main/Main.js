import { useEffect, useState } from "react";
import CardItem from "../ItemCards/CardItem";
import { useFetch } from "../stores";
import Pagination from "./Pagination";

const Main = () => {
    const { products, getAllProducts } = useFetch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsOnPage, setItemsOnPage] = useState(10);

    const lastIndex = currentPage * itemsOnPage;
    const firstIndex = lastIndex - itemsOnPage;
    const currentItemsList = products.slice(firstIndex, lastIndex)

    
    useEffect(() => getAllProducts(), [getAllProducts]); // можно ли отключить требование добавлять зависимость вместо []?
    
    useEffect(() => { <ItemsLayout /> }, [products]);
    
    const ItemsLayout = () => (
        <>
            <Pagination
                allItems={products.length}
                itemsOnPage={itemsOnPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
                
            < div className='items-list'>
                {
                    currentItemsList.map((item) => <CardItem key={item.id} item={item} />)
                }
            </div>
        </>
    );
    

    return (    
        <main>
            <ItemsLayout />
        </main>
    )
};

export default Main;
