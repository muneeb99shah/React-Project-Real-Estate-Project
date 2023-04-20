import React, { useState } from "react";
import Heroimg from "../images/hero-image.jpg";
import ButtonComponent from "./ButtonComponent";
export default function HeroSection() {
  const [value, setValue] = useState(50);
  const HerodataSet = [
    {
      id: 1,
      title: "For rent",
      icons: "fa fa-home",
      subTitle1: "For sale",
      subTitle2: " For rent",
    },
    {
      id: 2,
      title: " location",
      icons: "fa fa-map-marker",
      subTitle1: "For sale",
      subTitle2: " For rent",
    },
    {
      id: 3,
      title: " Property type",
      icons: "fa fa-bars",
      subTitle1: "For sale",
      subTitle2: " For rent",
    },
  ];

  function handelHeroInput(event) {
    setValue(event.target.value);
  }

  return (
    <div className="hero-container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="hero-text-container">
            <h1 className="hero-text">
              Easy way to find <br /> a perfect property
            </h1>
            <p className="hero-text">
              We provide a complete service for the sale, purchase or rental of
              real estate. We have been operating more than 10 years. Search
              millions of apartments and houses on Finder.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="hero-img">
            <img src={Heroimg} alt="hero img" />
          </div>
        </div>

        <div className="col-lg-6  col-md-12">
          <div className="btn-forms row">
            {HerodataSet.map((heroItem) => (
              <ButtonComponent
                key={heroItem.id}
                title={heroItem.title}
                icons={heroItem.icons}
                subTitle1={heroItem.subTitle1}
                subTitle2={heroItem.subTitle2}
              />
            ))}

            <div className="col-lg-6 col-md-6 btn-group dropdown range-width">
              <div className="drop-btn p-input range-cl">
                <span className="text-span heroinputIcons">
                  <i className="fa fa-money "></i>
                  Price
                </span>
                <input
                  id="myinput"
                  min="0"
                  max="700"
                  type="range"
                  value={value}
                  onChange={handelHeroInput}
                />
                <button className="drop-btn property-btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
