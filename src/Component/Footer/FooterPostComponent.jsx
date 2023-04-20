import React from "react";

export default function FooterPostComponent(props) {
  return (
    <>
      <div className="post-container">
        <div className="post-img">
          <img src={props.postItems.postImg} alt="" />
        </div>
        <div className="post-text">
          <h6>{props.postItems.heading}</h6>
          <h5>
            <a href="/" className="nav-links">
              {props.postItems.title}
            </a>
          </h5>

          <p>{props.postItems.paragraph}</p>
          <div className="date-comment">
            <a href="/" className="nav-links date-coment-items">
              <i className={props.postItems.calanderIcon}></i>
              <span>{props.postItems.dates}</span>
            </a>
            <a href="/" className="nav-links date-coment-items">
              <i className={props.postItems.commentIcons}></i>
              <span>{props.postItems.comments}</span>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
