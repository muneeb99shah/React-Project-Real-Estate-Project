import React from "react";

export default function CardComponent(props) {
  return (
    <>
      {/* <!-- card 1 --> */}
      <div className="card overlay">
        <div className="img-wrapper">
          <img src={props.items.cardImg} alt="..." />
        </div>
        {/* <!-- 1.1 --> */}
        <div className=" progres-container">
          <div className="progres">
            <div className="progress-text">
              <h4>
                <img src={props.items.walletFillIcon} alt="wallet icon" />
                {props.items.walletFillText}
              </h4>
            </div>

            <div className="progress-items">
              <div className="progres-bar">
                <div className="progress-border">
                  <div className="progress-color"></div>
                </div>
              </div>
              <span className="progres-value">
                {props.items.walletProgresValue}
              </span>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="progres">
            <div className="progress-text">
              <h4>
                <img src={props.items.homeFillIcon} alt="" />
                {props.items.homeFillText}
              </h4>
            </div>

            <div className="progress-items">
              <div className="progres-bar">
                <div className="progress-border">
                  <div className="progress-color green-colr"></div>
                </div>
              </div>
              <span className="progres-value">
                {props.items.homeProgresValue}
              </span>
            </div>
          </div>
        </div>
        {/* <!-- end --> */}
        <div className="card-body overlay-txt">
          <h3>{props.items.title}</h3>
        </div>
      </div>
    </>
  );
}
