import { BiSearch } from "react-icons/bi";
import { useFetch } from "../stores";
import { useRef, useState } from "react";

const Search = () => {
    const inputRef = useRef();
    const {getSearch} = useFetch();
    const [inputValue, setInputValue] = useState();
    // function inputUpdate() {
    //     setTimeout(()=>{
    //         setInputValue(inputRef.current.value)
    //     }, 500)
    //     console.log(inputValue);
    // } добавить в функцию выход из таймаута или _.debounce
    return (
    <span className="search">
        <input 
        ref={inputRef} 
        type="search" 
        placeholder="Search here..." 
        minLength={4} enterKeyHint="" 
        onKeyDown={(event)=> event.key ==="Enter" && getSearch(inputValue)} 
        className="search-input" 
        onChange={()=>setInputValue(inputRef.current.value)}/>
        <button className="search-btn" onClick={()=> getSearch(inputValue)}><BiSearch/></button>
    </span>
    );
}
 
export default Search;