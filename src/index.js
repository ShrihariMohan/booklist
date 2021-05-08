import React from "react";
import ReactDom from "react-dom";

import "./index.css";
const BookList = () => {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <div className="book">
      <BookImage />
      <BookTitle />
      <BookAuthor />
    </div>
  );
};
const BookImage = () => {
  return (
    <img
      className="bookImage"
      src="https://images-eu.ssl-images-amazon.com/images/I/91DtbV%2Bm2QS._AC_UL200_SR200,200_.jpg"
    ></img>
  );
};

const BookTitle = () => <h1>Harry Potter and the Philosopher's Stone </h1>;
const BookAuthor = () => <p> J K Rowling</p>;

ReactDom.render(<BookList />, document.getElementById("root"));
