import React from "react";

function Hebele({ children, hebeleCohort }) {
  return (
    <div>
      {children}
      <h1>{hebeleCohort}</h1>
    </div>
  );
}

export default Hebele;
