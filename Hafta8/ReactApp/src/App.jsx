import "./App.css";
import React, { useState } from "react";
import Card from "./card";
import Hebele from "./Children";
export default App;

function App() {
  const [cohort, setCohort] = useState("cohort 2");

  return (
    <div>
      <Card cardCohort={cohort} cardState={setCohort} />
      <Hebele hebeleCohort={cohort}>
        <h1>Ersin</h1>
      </Hebele>
    </div>
  );
}

// <Card cardCohort={cohort} cardState={setCohort} />

{
  /* <Hebele>
  <h1>Ersin</h1>
</Hebele>


<Hebele children={<h1>Ersin</h1>}/> */
}
