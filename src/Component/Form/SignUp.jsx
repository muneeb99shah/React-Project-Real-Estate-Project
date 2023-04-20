import React, { useState } from "react";
import pic from "./signin.jpg";
import NavRoutLayout from "../NavRoute/NavRoutLayout";
import { Link } from "react-router-dom";
import inputs from "./InputObj";
import MapingForm from "./MapingForm";

export default function SignUp() {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    conformpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    if (!userForm.username.trim()) {
      errors.username = "Username is required";
    } else if (!usernameRegex.test(userForm.username.trim())) {
      errors.username = "Username can only contain letters and numbers";
    }

    if (!userForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(userForm.email.trim())) {
      errors.email = "Please enter a valid email";
    }

    if (!userForm.password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(userForm.password.trim())) {
      errors.password = `at least 8 characters and
               contain at least 1 uppercase and,
               lowercase letter, 1 number symbol`;
    }

    if (!userForm.conformpassword.trim()) {
      errors.conformpassword = "Confirm Password is required";
    } else if (userForm.password !== userForm.conformpassword) {
      errors.conformpassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      localStorage.setItem("userForm", JSON.stringify(userForm));
      setUserForm({
        username: "",
        email: "",
        password: "",
        conformpassword: "",
      });
      setFormErrors({});
    }
  };

  return (
    <>
      <NavRoutLayout />

      <div className="main-form">
        <div className="form-container">
          <div className="form-img-text">
            <h3>
              Join Finder. <br /> Get premium benefits:
            </h3>
            <img src={pic} alt="SignIn" className="img-form" />
            <div className="signIn-tab">
              <span>Already have an account?</span>
              <Link to="/signIn">Sign in</Link>
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
              {inputs.map((takeInput) => (
                <MapingForm
                  key={takeInput.id}
                  {...takeInput}
                  value={userForm[takeInput.name]}
                  onChange={handleInputs}
                  error={formErrors[takeInput.name]}
                />
              ))}
              <button type="submit" className="submit-btn">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
