import React from "react";
import todayImg from "../images/9.jpg";
import todayImg10 from "../images/10.jpg";
import todayImg15 from "../images/15.jpg";
import AddTodayOBJ from "./OBJ_1";
import ObjRendre from "./ObjRendre";
import MapingObjRender from "./MapingObjRender";
export default function AddToday() {
  return (
    <section>
      <div className="add-today-container">
        <div className="Add-continer">
          <h2>Added today</h2>
          {AddTodayOBJ.map((namesValue) => (
            <ObjRendre key={namesValue.id} names={namesValue.names} />
          ))}
        </div>
        <div className="row img-size">
          <div className="col-lg-6 add-img-warp">
            <img src={todayImg} alt="" width="100%" />

            <div className="add-text  right-img-text">
              {/*  */}
              <MapingObjRender />

              {/*  */}
            </div>
          </div>
          <div className="col-lg-6 left-img-container">
            <div className="add-img-warp left-img left-1">
              <img src={todayImg15} alt="" width="100%" />
              <div className="add-text left-text-img left-text1">
                <MapingObjRender />
              </div>
            </div>
            <div className="add-img-warp left-img left-2">
              <img src={todayImg10} alt="" width="100%" />
              <div className="add-text left-text-img left-text2">
                <MapingObjRender />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
