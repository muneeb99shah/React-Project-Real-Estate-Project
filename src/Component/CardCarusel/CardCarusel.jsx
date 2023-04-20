import React from "react";
// import Cr1 from "../images/01.jpg";
// import CaruselOBJ from "./CaruselOBJ";
import CardReusable from "./CardReusable";
import CardDataset from "./CardDataset";
export default function CardCarusel() {
  return (
    <section>
      <div className="title-name">
        <h2>Top offers</h2>
        {/* <CardReusable/> */}
      </div>
      <div id="carouselExample" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper">
              {/* <!-- card 1 --> */}
              {CardDataset.map((items) => (
                <CardReusable key={items.id} items={items} />
              ))}

              {/* <!-- card END --> */}
            </div>
          </div>
          {/* <!--  --> */}
          <div className="carousel-item">
            <div className="card-wrapper">
              {/* <!-- card 5 --> */}
              {CardDataset.map((items) => (
                <CardReusable key={items.id} items={items} />
              ))}
              {/* <!-- card END --> */}
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon carousel-btn"
            aria-hidden="true"
          >
            <i className="fa-solid fa-less-than"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon carousel-btn"
            aria-hidden="true"
          >
            <i className="fa-solid fa-greater-than"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
