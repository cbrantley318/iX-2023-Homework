import React, { useEffect, useState } from "react";
import Book from "../../models/Book.js";

export default function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  useEffect(() => {
    console.log(props.bookToEdit);
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onFormSubmit(e) {
    e.preventDefault();

    console.log("First bit");
    console.log(title);

    if (title == "" || author == "" || isbn == "") {
      return;
    }
    console.log("Got here!");

    let book = new Book(title, author, isbn, null, props.user.uid);
    console.log("USER ID: " + props.user.uid);
    console.log(book.userID);
    props.onBookCreate(book);
    setTitle("");
    setAuthor("");
    setIsbn("");
    return;
  }

  return (
    <div>
      <h1>Library Database</h1>
      <form className="mx-5 my-3" onSubmit={onFormSubmit}>
        <label>Enter Book Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Enter Author Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label>Enter ISBN:</label>
        <input
          type="number"
          className="form-control"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary m-3">
          Add Book
        </button>
      </form>
    </div>
  );
}
