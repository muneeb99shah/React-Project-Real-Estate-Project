import React from "react";
import CardComponent from "./CardComponent";
import DataSet from "./Dataset";
export default function PropertyCarousel() {
  return (
    <section className="search-property">
      <div className="title-name">
        <h2>Serach property by city</h2>
      </div>

      {/* extra */}

      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper">
              {DataSet.map((items) => (
                <CardComponent key={items.id} items={items} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper">
              {DataSet.map((items) => (
                <CardComponent key={items.id} items={items} />
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i className="fa-solid fa-less-than sliderIcon"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <i className="fa-solid fa-greater-than sliderIcon"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
