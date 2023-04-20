import React from "react";
import imageCal from "../images/calculator.jpg";

export default function Calculate() {
  return (
    <section className="calculator-section">
      <div className="">
        <div className="row">
          <div className="col-lg-6  col-sm-12">
            <div className="cal-img">
              <img src={imageCal} alt="" />
            </div>
          </div>
          <div className="col-lg-6  col-sm-12 cal-text-container">
            <div className="cal-text">
              <h2>Сalculate the cost of your property</h2>
              <p>
                Real estate appraisal is a procedure that allows you to
                determine the average market value of real estate (apartment,
                house, land, etc.).Сalculate the cost of your property with our
                new Calculation Service.
              </p>

              <button className="calu-btn">
                <a href="/" className="calu-link">
                  <i className="fa fa-calculator"></i>calculator
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
