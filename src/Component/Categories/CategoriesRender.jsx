import React from "react";
import CategoriesOBJ from "./CategoriesOBJ";
import Categories from "./Categories";
export default function CategoriesRender() {
  return (
    <>
      <div className=" display-fle ">
        {CategoriesOBJ.map((ctg) => (
          <Categories key={ctg.id} names={ctg.names} icons={ctg.icons} />
        ))}
      </div>
    </>
  );
}
