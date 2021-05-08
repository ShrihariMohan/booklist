import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/91DtbV%2Bm2QS._AC_UL200_SR200,200_.jpg",
  title: "Harry Potter and the Philosopher's Stone",
  author: "J K Rowling",
  rating: 4.5,
};

const secondBook = {
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL200_SR200,200_.jpg",
  title: "Indian Polity",
  author: "M. Lakshminath",
  rating: 4.0,
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        rating={firstBook.rating}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        rating={secondBook.rating}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <div className="book">
      <img className="bookImage" src={props.img}></img>
      <h1 style={{ color: "red", fontSize: "large" }}>{props.title}</h1>
      <p> {props.author} </p>
      <p> rating : {props.rating} </p>
    </div>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
