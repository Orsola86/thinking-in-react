import React, { useState, useEffect } from "react";
import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";
import axios, { Axios } from "axios";

const Books = (props) => {
  const filters = ["All", "Design", "Mobile", "DevOps", "Essentials"];
  const [stateBooks, setBooks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // /*******Sintassi con FETCH() */
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await fetch("http://localhost:9000/books");
  //     return result;
  //   }
  //   fetchData()
  //     .then((response) => response.json())
  //     .then((data) => setBooks(data));
  // }, []);

  /*******Sintassi con AXIOS */
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get("http://localhost:9000/books");
  //     return result;
  //   }
  //   fetchData().then((response) => setBooks(response.data));
  // }, []);

  /*******Sintassi con AXIOS sugar syntax*/
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get("http://localhost:9000/books");
  //     //console.log(result.data);
  //     setBooks(result.data);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:9000/books")
        .then((response) => {
          setBooks(
            selectedFilter !== "All"
              ? response.data.filter((book) => book.category === selectedFilter)
              : response.data
          );
        })
        .catch((error) => console.log(error));
    }

    fetchData();
  }, [selectedFilter]);

  /*********alternativa meno furba */
  // async function selectFilter(filter) {
  //   console.log(filter);
  //   setSelectedFilter(filter);
  //   const filtered = await axios.get("http://localhost:9000/books");
  //   setBooks(
  //     filter === "All"
  //       ? filtered.data
  //       : filtered.data.filter((book) => book.category === category)
  //   );
  // }

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
              setSelectedFilter={setSelectedFilter}
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
