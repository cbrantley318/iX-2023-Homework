import React from 'react'
import Book from "../models/Book.js"

export default function BookForm() {
  return (
    <div>
        <h1>Library Database</h1>
        <form className='mx-5 my-3' onSubmit={onFormSubmit}>
            <label>Enter Book Name:</label>
            <input type = 'text' className='form-control' placeholder='Title'></input>
            <label>Enter Author Name:</label>
            <input type='text' className='form-control' placeholder='Author'></input>
            <label>Enter ISBN:</label>
            <input type='number' className='form-control' placeholder='ISBN'></input>
            <button type='submit' className='btn btn-primary m-3'>Add Book</button>
        </form>
    </div>
  )
}

function onFormSubmit(e) {
    e.preventDefault();
    
    return;
}
