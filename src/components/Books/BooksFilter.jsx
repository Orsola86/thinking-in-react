import React from "react";

const BooksFilter = (props) => (
    <ul className="nav nav-pills text-center"> 
    {props.booksFilter.map((element, index) => (
      <li key= {index}>
        <a href="#">{element}</a>
      </li>
    ))}
  </ul>
)


export default BooksFilter;