import React from "react";
import ReactDOM from "react-dom";

//Styling
import "./index.css";

function BookList() {
  return (
    <section class="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "The Book of Trees";
  const author = "Bill Gates";
  return (
    <article className="book">
      <img
        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        alt="Image of a book"
        width="300"
        height="300"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <p>{let x = 6}</p> */}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
