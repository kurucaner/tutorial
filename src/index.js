import React from "react";
import ReactDOM from "react-dom";

//Styling
import "./index.css";

//Setup vars

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const title = "The Book of Trees";
  const author = "Bill Gates";
  const img =
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
  return (
    <article className="book">
      <img src={img} alt="Image of a book" width="300" height="300" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {console.log(props)}
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
