import React from "react";

export default function ButtonComponent(props) {
  const { title, subTitle1, icons, subTitle2 } = props;
  return (
    <>
      <div className="col-lg-2 col-md-4 btn-group dropdown">
        <div className="  p-input">
          <button
            type="button"
            className="btn  dropdown-toggle drop-btn"
            data-bs-toggle="dropdown"
          >
            <span className="text-span heroinputIcons">
              {/* <i className={icons}></i> */}
              <i className={icons}></i>
              {title}
            </span>
          </button>
          <div className="dropdown-menu my-1">
            <a href="/" className="dropdown-item">
              {subTitle1}
            </a>
            <a href="/" className="dropdown-item">
              {subTitle2}
            </a>
          </div>
          <span className="v-line simle-line"></span>
        </div>
      </div>
    </>
  );
}
