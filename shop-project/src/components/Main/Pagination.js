

const Pagination = ({allItems, itemsOnPage, currentPage, setCurrentPage}) => {
    const pages = [];
    for (let i = 1; i < Math.ceil(allItems/itemsOnPage); i++) {
        pages.push(i)        
    }
    return (
        <div className="pages-buttons">
            <button onClick={()=>currentPage !== pages[0] && setCurrentPage(currentPage - 1)}>Prev</button>
            {pages.map(page => {
                return <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? "active-page" : ""}
                >{page}</button>
            })}
            <button onClick={()=>currentPage !== pages[pages.length - 1] && setCurrentPage(currentPage + 1)}>Next</button>
        </div>
    );
}
 
export default Pagination;