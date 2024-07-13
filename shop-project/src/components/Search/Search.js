import { BiSearch } from "react-icons/bi";
import { useFetch } from "../stores";
import { useEffect, useRef, useState } from "react";

const Search = () => {
    const inputRef = useRef();
    const {getSearch} = useFetch();
    const [inputValue, setInputValue] = useState();
    
    useEffect(() => {
        let searchUpdate = setTimeout(()=>{
            setInputValue(inputRef.current.value)
            console.log(inputValue);
        }, 500)
        return ()=> clearTimeout(searchUpdate)
    },[inputValue])
    return (
    <span className="search">
        <input 
        ref={inputRef} 
        type="search" 
        placeholder="Search here..." 
        minLength={4}
        onKeyDown={(event)=> event.key ==="Enter" && getSearch(inputValue)} 
        className="search-input" 
        onChange={()=>setInputValue(inputRef.current.value)}/>
        <button className="search-btn" onClick={()=> getSearch(inputValue)}><BiSearch/></button>
    </span>
    );
}
 
export default Search;