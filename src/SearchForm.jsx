import React from "react";
import { useGlobalContext } from "./AppContext";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleInputSearch = (e) => {
    e.preventDefault();
    if (!e.target.elements.search.value) return;
    setSearchTerm(e.target.elements.search.value);
  };

  return (
    <section className="search-form">
      <h1 className="title">Unsplash images</h1>
      <form action="" onSubmit={handleInputSearch}>
        <input
          type="text"
          className="input-search"
          name="search"
          placeholder="Cat"
        />
        <button className="btn">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
