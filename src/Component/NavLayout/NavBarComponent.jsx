import React from "react";

export default function NavBarComponent(props) {
  // const {
  //   mainHeading,
  //   dropdown1,
  //   icons1,
  //   dropdown2,
  //   icons2,
  //   dropdown3,
  //   icons3,
  //   dropdown4,
  //   icons4,
  //   dropdown5,
  //   icons5,
  //   dropdown6,
  //   icons6,
  //   dropdown7,
  //   icons7,
  // } = props;
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="\"
          role="button"
          data-bs-toggle="dropdown"
        >
          {props.NavItems.mainHeading}
        </a>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons1} aria-hidden="true"></i>
              {props.NavItems.dropdown1}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons2}></i>
              {props.NavItems.dropdown2}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons3}></i>
              {props.NavItems.dropdown3}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons4}></i>
              {props.NavItems.dropdown4}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons5} aria-hidden="true"></i>
              {props.NavItems.dropdown5}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons6}></i>
              {props.NavItems.dropdown6}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="\">
              <i className={props.NavItems.icons7}></i>{" "}
              {props.NavItems.dropdown7}
            </a>
          </li>
          {/* </li> */}
        </ul>
      </li>
    </>
  );
}
