import React from "react";

const BooksFilter = ({ booksFilter, setSelectedFilter }) => (
  <ul className="nav nav-pills text-center">
    {booksFilter.map((category, index) => (
      <li
        className={category === setSelectedFilter ? "active" : ""}
        key={index}
        onClick={() => setSelectedFilter(category)}
      >
        <a href="#0">{category}</a>
      </li>
    ))}
  </ul>
);

export default BooksFilter;
