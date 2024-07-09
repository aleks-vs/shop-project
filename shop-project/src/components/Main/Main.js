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

    useEffect(() => console.log(itemsOnPage), [itemsOnPage]); 
    
    useEffect(() => {getAllProducts()}, [getAllProducts]); 
    
    useEffect(() => { <ItemsLayout /> }, [products]);
    
    const ItemsLayout = () => (
        <>
            <Pagination
                allItems={products.length}
                itemsOnPage={itemsOnPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setItemsOnPage={setItemsOnPage} />

            <span>Товаров на странице:&nbsp;
                <select value={itemsOnPage} onChange={(e)=> setItemsOnPage(e.target.value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                </select>
            </span>
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
