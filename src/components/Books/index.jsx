import React, { useState } from "react";
import BooksFilter from "./BooksFilter";
import books from "../../mocks/books";
import BooksList from "./BooksList";

const Books = (props) => {
  const filters = ["All", "Design", "Mobile", "DevOps", "Essentials"];
  const [stateBooks, setBooks] = useState(books);
  const [selectedFilter, setSelectedFilter] = useState("All");

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
