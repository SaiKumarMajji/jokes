import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Please enter your email");
    }
    if (!password) {
      setPasswordError("Please enter your password");
    }

    if (email && password) {
      navigate("/homepage"); // Set loggedIn to true if email and password are entered
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError(""); // Clear error message when user starts typing
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value) {
      setPasswordError(""); // Clear error message when user starts typing
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-dark">
      <div className=" form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit} className="needs-validation">
          <h3 className="text-center">Login</h3>
          <div className="mb-3 ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              value={email}
              onChange={handleEmailChange}
            />

            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className={`form-control ${passwordError ? "is-invalid" : ""}`}
              value={password}
              onChange={handlePasswordChange}
            />

            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />

            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-right">
            Forgot <a href="">Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
