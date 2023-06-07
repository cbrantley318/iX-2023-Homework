import React, { useEffect, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import BookService from "./services/book-service";

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const fetchedBooks = await BookService.fetchBooks();
      console.log(fetchedBooks);
      setBooks(fetchedBooks);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreate(book) {
    //needs to add to firebase first in order to retrieve ID
    book.id = await BookService.createBook(book).id;

    //the timeout is to force the function to wait for the book to be created
    //otherwise, it tried assigning the book w/ the defualt null ID before firebase created an ID
    setTimeout(() => {
      setBookToEdit(null);
      setBooks([...books, book]);
    }, 1);
  }

  async function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn != book.isbn));
    //remove book from firebase
    await BookService.deleteBook(book);
  }

  async function onBookEdit(book) {
    //this removes and then adds the book to the table, so can just delete from firebase
    setBookToEdit(book);

    //setBooks(books.filter((x) => x.isbn != book.isbn));
    onBookDelete(book);

    //push update to firebase
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
