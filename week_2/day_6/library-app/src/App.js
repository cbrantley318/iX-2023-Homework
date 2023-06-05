import React, { useEffect, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreate(book) {
    //just adds it to array, then automatically updated later on
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn != book.isbn));
  }

  function onBookEdit(book) {
    console.log("editing books");
    setBookToEdit(book);
    console.log("editing books 2");

    setBooks(books.filter((x) => x.isbn != book.isbn));
    console.log("editing books 3");

  }

  return (
    <div className="App">
      <div className="card m-5 py-2">
        <BookForm
          bookToEdit={bookToEdit}
          onBookCreate={onBookCreate}
        ></BookForm>
        <BookTable
          books={books}
          onBookEdit={onBookEdit}
          onBookDelete={onBookDelete}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;
