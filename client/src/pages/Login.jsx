import React from "react";
import "./style/login.css";
import { useState } from "react";
export default function login() {
  const [Username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmission = (event)=>{
    event.preventDefault()
    console.log(Username,password)
  }
  return (
    <>
      <div className="login">
        <h1>LOGIN</h1>
        <h3>Please Enter Your Login And Passworrd</h3>
        <div className="form">
          <form onSubmit={handlesubmission}>
            <div className="inputs">
              <input
                type="text"
                value={Username}
                onChange={(event) => setusername(event.target.value)}
                placeholder="Username"
                />
              <br />
              <input
                type="password"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
                placeholder="Password"
              ></input>
              <br></br>
            </div>
            <a className="forgotpassword" href="forgot password">
              Forgot Password?
            </a>
            <br></br>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
