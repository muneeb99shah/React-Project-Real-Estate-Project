import React from "react";
export default function FooterLinksComponent(props) {
  return (
    <>
      <div className="footer-links">
        <div className="links-heading footer-aligment">
          <h4 className="text-uppercase text-danger ft-mar">
            {props.linkItems.heading}
          </h4>
          <ul className=" link-list">
            <li className="nav-items links-items">
              <a className="links nav-links" href="/">
                {props.linkItems.link1}
              </a>
            </li>
            <li className="nav-items links-items">
              <a className="links nav-links" href="/">
                {props.linkItems.link2}
              </a>
            </li>
            <li className="nav-items links-items">
              <a className="links nav-links" href="/">
                {props.linkItems.link3}
              </a>
            </li>
            <li className="nav-items links-items">
              <a className="links nav-links" href="/">
                {props.linkItems.link4}
              </a>
            </li>
            <li className="nav-items links-items">
              <a className="links nav-links" href="/">
                {props.linkItems.link5}
              </a>
            </li>
            <li className="nav-items inks-items">
              <a className="links nav-links" href="/">
                {props.linkItems.link6}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
