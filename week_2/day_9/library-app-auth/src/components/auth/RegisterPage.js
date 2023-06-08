import React, { useState } from "react";

import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
      navigate("/");
    }


  }


  return (
    <div className="container m-4">
      <div className="card p-2">
        <div className="card-body">
          Please enter your username and password to register:
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
              ></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Password"
              ></input>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
