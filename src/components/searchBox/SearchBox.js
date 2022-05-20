import { useState } from "react";
const SearchBox = ({filterBySearch}) => {
    const [inputText, setInputText] = useState('');
    const onSubmit = (e)=> {
        e.preventDefault();
        filterBySearch(inputText);
    }
  
    return (
        <div className='search-box'>
            <form onSubmit= {(e)=>{onSubmit(e)}}>
                <input className="form-control" type="text" value={inputText} placeholder="Search for some one"
                onChange={(e)=>{setInputText(e.target.value.toLowerCase()); console.log(inputText);}} />
                <button className="btn" type="submit" data-testid="search-button">Search</button>
            </form>
        </div>
    );
}

export default SearchBox;