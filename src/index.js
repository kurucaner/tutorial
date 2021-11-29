import React from "react";
import ReactDOM from "react-dom";

//Styling
import "./index.css";

//Setup vars

const firstBook = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  img: "https://m.media-amazon.com/images/I/61uFYcoYRRL.jpg",
};

const secondBook = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  img: "https://m.media-amazon.com/images/I/51lKk3HUNlS.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const title = "The Book of Trees";
  const author = "Bill Gates";
  const img =
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
  return (
    <article className="book">
      <img src={props.img} alt="Image of a book" width="300" height="300" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
