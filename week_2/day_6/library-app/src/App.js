import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  return (
    <div className="App">
      <div className='card m-5 py-2'>
        <BookForm />
        <BookTable />
      </div>
    </div>
  );
}

export default App;
