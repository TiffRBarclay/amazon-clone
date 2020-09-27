import React, { useState } from "react";
import "./Login.css";
import AmazonLogoDark from "../Images/amazon-logo-dark.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={AmazonLogoDark} alt="amazon-logo" />
      </Link>
      <div className="login-container">
        <h1 className="login-title">Sign in</h1>
        <form>
          <label>E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            className="login-submitButton"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <p>
          By signing-in you agree to{" "}
          <i>
            <strong>AMAZON'S FAKE CLONE</strong>
          </i>{" "}
          Conditions of Use & Sale. Please see out Privacy Notive, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login-registerButton" onClick={register}>
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
