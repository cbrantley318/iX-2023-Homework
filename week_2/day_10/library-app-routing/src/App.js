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
import RequireAuth from "./components/common/RequireAuth";
import Spinner from "./components/common/Spinner";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      {isUserUpdated ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user = {user}>
                <BookPage user = {user} />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <div className="mt-5 text-center">
          <Spinner></Spinner>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
