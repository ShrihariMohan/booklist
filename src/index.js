import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/91DtbV%2Bm2QS._AC_UL200_SR200,200_.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J K Rowling",
    rating: 4.5,
  },
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL200_SR200,200_.jpg",
    title: "Indian Polity",
    author: "M. Lakshminath",
    rating: 4.0,
  },
];

const BookList1 = () => {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <BookListComponent key={index} book={book} />;
      })}
    </section>
  );
};

const BookList2 = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <BookListComponent2usingSpreadOperator {...book} />;
      })}
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

const BookAlternativeProp = ({ img, title, author, rating, children }) => {
  //const { img, title, author } = props;
  console.log(children);
  return (
    <div className="book">
      <img className="bookImage" src={img}></img>
      <h1 style={{ color: "red", fontSize: "large" }}>{title}</h1>
      {children}
      <p> {author} </p>
      <p> rating : {rating} </p>
    </div>
  );
};

const BookListComponent = (props) => {
  const { img, title, author, rating } = props.book;
  return (
    <div className="book">
      <img className="bookImage" src={img}></img>
      <h1 style={{ color: "red", fontSize: "large" }}>{title}</h1>
      <p> {author} </p>
      <p> rating : {rating} </p>
    </div>
  );
};

const BookListComponent2usingSpreadOperator = ({
  img,
  title,
  author,
  rating,
}) => {
  return (
    <div className="book">
      <img className="bookImage" src={img}></img>
      <h1 style={{ color: "red", fontSize: "large" }}>{title}</h1>
      <p> {author} </p>
      <p> rating : {rating} </p>
    </div>
  );
};
ReactDom.render(<BookList2 />, document.getElementById("root"));
