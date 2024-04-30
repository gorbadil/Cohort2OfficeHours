import "./App.css";
import { useState } from "react";
import NewComp from "./newComp";

export default App;

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(function (hebele) {
      hebele + 1;
    });
  };

  return (
    <div>
      {/* {NewComp(name)} 
      {NewComp("ersin")} */}
      <NewComp yazi={count} soyad={"mutlu"} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

document.createElement("div");
