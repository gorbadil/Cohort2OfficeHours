import React from "react";
import Counter3 from "./Counter3";
import { useContext } from "react";
import CounterContext from "../context/Context";

function Counter2() {
  const { name } = useContext(CounterContext);
  return (
    <div>
      Counter2: {name}
      <Counter3 />
    </div>
  );
}

export default Counter2;
