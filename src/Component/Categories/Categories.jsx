import React from "react";

export default function Categories(props) {
  const { names, icons } = props;
  return (
    <section className="categories-container">
      <div className="categories">
        <a href="/" className="categories-link ">
          <div className="categories-items">
            <i className={icons}></i>
          </div>
          <h3>{names}</h3>
        </a>
      </div>
    </section>
  );
}
