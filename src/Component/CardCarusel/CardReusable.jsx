import React from "react";
export default function CardReusable(props) {
  return (
    <>
      <div className="card">
        <div className="img-wrapper">
          <img src={props.items.cardImg} alt="..." />
          <div className="card-tag">
            <span className="tags">{props.items.tagsName}</span>
            <span className="tags"></span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-font-size">
            <h4 className="mb-1 fs-xs fw-normal text-uppercase text-danger si-1">
              {props.items.sale}
            </h4>
            <h3 className="h6 mb-2 fs-base si-2">
              <a className="nav-link stretched-link si-3" href="/">
                {props.items.cottage}
              </a>
            </h3>
            <p className="mb-2 fs-sm text-muted si-4">{props.items.address}</p>
          </div>
          <div className="fw-bold">
            <i className="fa fa-money icon-items"></i>${props.items.price}
          </div>
        </div>
        <div className="card-line"></div>
        <div clas="icon-cards ">
          <div className="icon-container">
            <span className="icon-items">
              <i className={props.items.icons1}></i>
            </span>
            <span className="icon-items">
              <i className={props.items.icons2}></i>
            </span>
            <span className="icon-items">
              <i className={props.items.icons3}></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
