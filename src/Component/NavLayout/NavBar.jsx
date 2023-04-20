import React from "react";
import { Link } from "react-router-dom";
import LogoDark from "../images/logo-dark.png";
import NavBarComponent from "./NavBarComponent";

export default function NavBar() {
  const NavDataSet = [
    {
      id: 1,
      mainHeading: "Demo",
      dropdown1: "Real Estate Demo",
      icons1: "fa fa-home drop-icon",
      dropdown2: "Car Finder Demo",
      icons2: "fa-solid fa-car-side",
      dropdown3: "Job Board Demo",
      icons3: "fa-solid fa-car-side",
      dropdown4: "City Guide Demo",
      icons4: "fa-solid fa-location-dot",
      dropdown5: " Main Page",
      icons5: "fa fa-home drop-icon",
      dropdown6: "Components",
      icons6: "fa-sharp fa-solid fa-bars",
      dropdown7: "Documentation",
      icons7: "fa-solid fa-file",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={LogoDark} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NavDataSet.map((NavItems) => (
              <NavBarComponent key={NavItems.id} NavItems={NavItems} />
            ))}
          </ul>

          <form className="d-flex btn-width">
            <Link to="/signIn">
              <button className="btn nav-btn ">
                <i className="fa-regular fa-user nav-btn-icon"></i>
                Sign in
              </button>
            </Link>
            <Link to="/">
              <button className="btn nav-btn nav-btn-add ">
                <i className="fa-solid fa-plus nav-btn-icon"></i>Addproperty
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
