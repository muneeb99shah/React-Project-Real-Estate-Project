import React from "react";
import OBJpartner from "./OBJpartner";
import RenderPartner from "./RenderPartner";
export default function OurPartners() {
  return (
    <section>
      <div className=" partner-container title-name">
        <h2>Our partners</h2>
        <div className="row">
          {OBJpartner.map((imags) => (
            <RenderPartner key={imags.id} imgs={imags.imgs} />
          ))}
        </div>
      </div>
    </section>
  );
}
