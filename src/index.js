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
  const h1text = "Harry Potter and the Philosopher's Stone on a variable";
  return (
    <div className="book">
      <img
        className="bookImage"
        src="https://images-eu.ssl-images-amazon.com/images/I/91DtbV%2Bm2QS._AC_UL200_SR200,200_.jpg"
      ></img>
      <h1 style={{ color: "red", fontSize: "large" }}>{h1text}</h1>
      <p> J K Rowling</p>
    </div>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
