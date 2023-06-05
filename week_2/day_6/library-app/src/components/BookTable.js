import React from "react";

export default function BookTable(props) {
  return (
    <div className="p-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => {
            return (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button
                    onClick={props.onBookEdit(book)}
                    className="btn btn-warnin btn-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={props.onBookDelete(book)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
