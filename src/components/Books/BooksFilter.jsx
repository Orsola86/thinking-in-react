import React from "react";

const BooksFilter = ({ booksFilter, selectFilter }) => (
  <ul className="nav nav-pills text-center">
    {booksFilter.map((filter, index) => (
      <li key={index} onClick={() => selectFilter(filter)}>
        <a href="#0">{filter}</a>
      </li>
    ))}
  </ul>
);

export default BooksFilter;
