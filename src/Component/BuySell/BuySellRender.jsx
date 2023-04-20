import React from "react";
import BuySell from "./BuySell";
import BuySellOBJ from "./BuySellOBJ";
export default function BuySellRender() {
  return (
    <>
      <section className="rent-section">
        <div className="row rent-continer">
          {BuySellOBJ.map((sellCard) => (
            <BuySell key={sellCard.id} sellCard={sellCard} />
          ))}
        </div>
      </section>
    </>
  );
}
