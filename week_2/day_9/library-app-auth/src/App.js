import "./App.css";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";

//importing bookpage, login, register, and navbar

import BookPage from "./components/books/BookPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import NavBar from "./components/common/NavBar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
    <NavBar user={user}/>
    <Routes>
      <Route path='/' element={<BookPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );


}

export default App;
