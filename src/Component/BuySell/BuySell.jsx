import React from "react";

export default function BuySell(props) {
  return (
    <div className="col-lg-4 colg-md-6 rent-items">
      <img src={props.sellCard.imgs} alt="buy a property" />
      <div className="rent-text">
        <h2>{props.sellCard.title}</h2>
        <p>{props.sellCard.description}</p>
      </div>
      <a href="/">
        <button>{props.sellCard.btnName}</button>
      </a>
    </div>
  );
}
