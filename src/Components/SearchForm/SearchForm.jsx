import React from "react";
import { useGlobalContext } from "../Context/Context";

const SearchForm = () => {
  const  {handleSearch, query} = useGlobalContext()
  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          className="form-control"
          placeholder="Search...."
          value={query}
          onChange={handleSearch}
        />
      </form>
    </>
  );
};
export default SearchForm;
