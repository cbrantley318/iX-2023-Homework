import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logging in");
      navigate("/");

    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container m-4">
      <div className="card p-2">
        <div className="card-body">
          Please enter your username and password:
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
