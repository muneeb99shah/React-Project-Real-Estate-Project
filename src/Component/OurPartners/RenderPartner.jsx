import React from "react";
export default function RenderPartner({ imgs }) {
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="partner-logo">
          <img className="color-log" src={imgs} alt="CHASE" />
        </div>
      </div>
    </>
  );
}
