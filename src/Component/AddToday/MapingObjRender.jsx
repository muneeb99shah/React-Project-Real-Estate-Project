import React from "react";
import ObjRender2 from "./ObjRender2";
import OBJ_2 from "./OBJ_2";
export default function mapingObjRender() {
  return (
    <>
      {OBJ_2.map((items) => (
        <ObjRender2 key={items.id} items={items} />
      ))}
    </>
  );
}
