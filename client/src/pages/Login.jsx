import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/login.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const users = [
   { username: "Sree", password: "2604" },
   { username: "anu", password: "1234" },
   { username: "abii", password: "129" }]

  const handleSubmission = (event) => {
    event.preventDefault();
    for (let user of users) {
      if (username === user.username) {
        if (password === user.password) {
          navigate("/Home");
        } else {
          toast.error("Incorrect password");
        }
      } else {
        toast.error("Incorrect username");
      }
    }
    
  };

  return (
    <section id="loginpage">
      <h1>Welcome, Explore, Enjoy AVV Mart</h1>
      <h1 className="login">LOGIN</h1>
      <form onSubmit={handleSubmission}>
        <div className="username">
          <h2>Username:</h2>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter Your Username"
          />
        </div>
        <div className="password">
          <h2>Password:</h2>
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter Your Password"
          />
        </div>
        <div className="forgotpassword">
          <h2>Remember Me</h2>
          <h2>Forgot password?</h2>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button">
          <button type="submit">Login</button>
        </div>
        <ToastContainer />
      </form>
    </section>
  );
}
