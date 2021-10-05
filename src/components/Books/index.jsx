import React from "react";
import BooksFilter from "./BooksFilter";

const filter = ['All', 'Design', 'Mobile', 'DevOps','Essentials'];

const Books = ({categoriesBooks}) => (
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
          <BooksFilter booksFilter = {filter}/>
        </div>
      </div>
      <div className="row book-list">LIBRI</div>
    </div>
  </section>
)


export default Books;