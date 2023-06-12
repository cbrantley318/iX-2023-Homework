import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import Book from "../models/Book";

class BookService {
  constructor() {
    this.collection = "books";
  }

  async fetchBooks() {
    //returns an array of book objects
    const collector = collection(db, this.collection);
    const qs = await getDocs(collector);
    let books = [];
    qs.forEach((doc) => {
      const data = doc.data();
      const book = new Book(data.title, data.author, data.isbn, doc.id, data.userID);
      books.push(book);
    });

    return books;
  }

  async createBook(book) {
    const docRef = await addDoc(collection(db, this.collection), {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        userID: book.userID,
      });

      book.id = docRef.id;
    
  }

  async updateBook(book) {
    const docRef = doc(db, this.collection, book.id);

    await updateDoc(docRef, {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
    });
  }

  async deleteBook(book) {
    const docRef = doc(db, this.collection, book.id);
    await deleteDoc(docRef);
  }
}

const bs = new BookService();
export default bs;
