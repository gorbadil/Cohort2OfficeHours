import React from "react";

function CardInsideCard({ CardInsideState }) {
  const handleClick = () => {
    CardInsideState("cohort 2 Mezun Oldu");
  };
  return (
    <div>
      <button onClick={handleClick}>Tıkla</button>
    </div>
  );
}

export default CardInsideCard;
