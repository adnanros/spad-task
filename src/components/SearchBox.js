import { useState } from "react";
const SearchBox = ({filterBySearch}) => {
    const [inputText, setInputText] = useState('');
    const onSubmit = (e)=> {
        e.preventDefault();
        filterBySearch(inputText);
    }
  
    return (
        <div className='mb-3'>
            <form className="d-flex" onSubmit= {(e)=>{onSubmit(e)}}>
                <input className="form-control" type="text" value={inputText}
                onChange={(e)=>{setInputText(e.target.value.toLowerCase()); console.log(inputText);}} />
                <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
        </div>
    );
}

export default SearchBox;