import React, { useEffect, useState } from "react";
import Book from "../models/Book.js";

export default function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onFormSubmit(e) {
    e.preventDefault();

    if (title == null || author == null || isbn == null) {
      return;
    }

    let book = new Book(author, title, isbn);

    props.onBookCreate(book);
    setTitle(null);
    setAuthor(null);
    setIsbn(null);
    return;
  }

  return (
    <div>
      <h1>Library Database</h1>
      <form className="mx-5 my-3" onSubmit={onFormSubmit}>
        <label>Enter Book Name:</label>
        <input type="text" className="form-control" placeholder="Title"></input>
        <label>Enter Author Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Author"
        ></input>
        <label>Enter ISBN:</label>
        <input
          type="number"
          className="form-control"
          placeholder="ISBN"
        ></input>
        <button type="submit" className="btn btn-primary m-3">
          Add Book
        </button>
      </form>
    </div>
  );
}
