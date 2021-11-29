import React from "react";
import ReactDOM from "react-dom";

//Styling
import "./index.css";

function BookList() {
  return (
    <section class="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
    alt="Image of a book"
    width="300"
    height="300"
  />
);

const Title = () => <h1>Inception</h1>;
const Author = () => <h2>Christopher Nolan</h2>;

ReactDOM.render(<BookList />, document.getElementById("root"));
