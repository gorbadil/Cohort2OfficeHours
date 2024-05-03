import React from "react";
import { useContext } from "react";
import CounterContext from "../context/Context";
import NameContext from "../context/NameContext";

function CounterBtn() {
  const { setCount } = useContext(CounterContext);
  const { newName, setNewName } = useContext(NameContext);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleNameClick = (event) => {
    setNewName(event.target.id);
  };

  return (
    <div>
      <button onClick={handleClick}>Arttır</button>
      <h1>{newName}</h1>
      <button id="Belida" onClick={handleNameClick}>
        birinci
      </button>
      <button id="Ataberk" onClick={handleNameClick}>
        ikinci
      </button>
      <button id="Ersin" onClick={handleNameClick}>
        üçüncü
      </button>
    </div>
  );
}

export default CounterBtn;
