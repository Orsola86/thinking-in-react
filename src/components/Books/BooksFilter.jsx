import React from "react";

const BooksFilter = ({ booksFilter, selectFilter }) => (
  <ul className="nav nav-pills text-center">
    {booksFilter.map((category, index) => (
      <li
        className={category === selectFilter ? "active" : ""}
        key={index}
        onClick={() => selectFilter(category)}
      >
        <a href="#0">{category}</a>
      </li>
    ))}
  </ul>
);

export default BooksFilter;
