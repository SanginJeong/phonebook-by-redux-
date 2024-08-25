import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const { contact } = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <form onSubmit={searchByName} className='search_area'>
      <input 
        onChange={(e)=>{setKeyword(e.target.value)}}
        type="text" placeholder='이름을 입력해주세요.' />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBox