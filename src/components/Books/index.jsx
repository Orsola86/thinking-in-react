import React, { useState, useEffect, useLayoutEffect } from "react";
import BooksFilter from "./BooksFilter";
import books from "../../mocks/books";
import BooksList from "./BooksList";
import axios, { Axios } from "axios";

const Books = (props) => {
  const filters = ["All", "Design", "Mobile", "DevOps", "Essentials"];
  const [stateBooks, setBooks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:9000/books");
      return result;
    }
    fetchData().then((response) => setBooks(response.data));
  }, []);

  function selectFilter(category) {
    setSelectedFilter(category);
    const filtered =
      category === "All"
        ? books
        : books.filter((book) => book.category === category);
    setBooks(filtered);
  }

  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <BooksFilter
              booksFilter={filters}
              selectFilter={selectFilter}
              selectedFilter={selectedFilter}
            />
          </div>
        </div>
        <BooksList stateBooks={stateBooks} />
      </div>
    </section>
  );
};

export default Books;
