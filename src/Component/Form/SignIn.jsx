import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavRoutLayout from "../NavRoute/NavRoutLayout";
import "./form.css";
import pic from "./signin.jpg";

export default function SignIn() {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const [validMassage, SetValidMassage] = useState();

  const [formErrors, setFormErrors] = useState({});

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    if (!userForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(userForm.email.trim())) {
      errors.email = "Please enter a valid email";
    }

    if (!userForm.password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(userForm.password.trim())) {
      errors.password = `Password must be at least 8 characters and
             contain at least 1 uppercase and,
             lowercase letter, 1 number symbol`;
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userForm"));
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      SetValidMassage("Please fill in all required fields");
    } else if (
      storedData &&
      userForm.email === storedData.email &&
      userForm.password === storedData.password
    ) {
      SetValidMassage("Successfully Login ");
      setUserForm({
        email: "",
        password: "",
      });
    } else {
      SetValidMassage("Invalid Email & Password ");
    }
  };

  return (
    <>
      <NavRoutLayout />
      <div className="main-form">
        <div className="valid-massage-container">
          <h2 className="valid-massage">{validMassage}</h2>
        </div>
        <div className="form-container">
          <div className="form-img-text">
            <h3>
              Hey there! <br /> Wellcome back
            </h3>
            <img src={pic} alt="SignIn" className="img-form" />
            <div className="signIn-tab">
              <span>Don't have an account?</span>
              <Link to="/SignUp">Sign up here</Link>
            </div>
          </div>
          <div className="form-Values">
            <div className="socila-btn">
              <button className="singIn-G-F">
                <a href="/">
                  <i className="fa-brands fa-google"></i>
                  Sign in with Google
                </a>
              </button>
              <button className="singIn-G-F">
                <a href="/">
                  <i className="fa-brands fa-facebook"></i>
                  Sign in with Facebook
                </a>
              </button>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="form-items">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userForm.email}
                  onChange={handleInputs}
                />
                <span className="error-message">{formErrors.email}</span>
              </div>

              <div className="form-items">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userForm.password}
                  onChange={handleInputs}
                />
                <span className="error-message">{formErrors.password}</span>
              </div>

              <button type="submit" className="submit-btn">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
