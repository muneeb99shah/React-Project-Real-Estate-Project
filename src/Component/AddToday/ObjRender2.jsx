import React from "react";

export default function ObjRender2(props) {
  return (
    <>
      <div className="txt-items">
        <h6>{props.items.subName}</h6>
        <h3>{props.items.title}</h3>
        <p>
          <i className={props.items.icons}></i>
          {props.items.iconsText}
        </p>
      </div>
      <div className="add-btn">
        <a href="/" className="add-btn-links">
          From ${props.items.price}
          <button className="add-icon">
            <i className={props.items.SecIcons}></i>
          </button>
        </a>
      </div>
    </>
  );
}
