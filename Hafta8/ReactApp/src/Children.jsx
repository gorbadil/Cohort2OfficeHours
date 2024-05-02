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

// const prop = {
//   children: <h1>Ersin</h1>,
//   hebeleCohort: cohort,
// };
