import React from "react";

export default function ObjRendre(props) {
  const { names } = props;
  return (
    <>
      <ul className="add-list">
        <li className="add-items">
          <a href="/" className="add-links">
            {names}
          </a>
        </li>
      </ul>
    </>
  );
}
